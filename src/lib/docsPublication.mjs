import path from 'path';
import fs from 'fs';
import fg from 'fast-glob';
import matter from 'gray-matter';

const HIDDEN_IN_PRODUCTION_STATUSES = new Set([
  'todo',
  'wip',
  'needs-fix',
  'requires-fix',
  'needs-review',
  'outdated',
  'legacy',
]);

export function normalizeDocStatus(status) {
  return String(status || 'todo').trim().toLowerCase();
}

export function isDocHiddenInProduction(status) {
  return HIDDEN_IN_PRODUCTION_STATUSES.has(normalizeDocStatus(status));
}

export function shouldFilterDocsInProduction() {
  return (
    process.env.NODE_ENV === 'production' &&
    process.env.DOCS_INCLUDE_UNFINISHED !== 'true'
  );
}

export function getProductionExcludedDocs(siteDir) {
  if (!shouldFilterDocsInProduction()) {
    return [];
  }

  const docsDir = path.join(siteDir, 'docs');
  const files = fg.sync(['**/*.md', '**/*.mdx'], {
    cwd: docsDir,
    dot: false,
  });

  return files.filter((relativePath) => {
    const raw = fs.readFileSync(path.join(docsDir, relativePath), 'utf8');
    const {data} = matter(raw);
    return isDocHiddenInProduction(data.status);
  });
}
