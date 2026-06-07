import fs from 'fs/promises';
import path from 'path';
import fg from 'fast-glob';
import matter from 'gray-matter';
import {
  isDocHiddenInProduction,
  shouldFilterDocsInProduction,
} from '../../lib/docsPublication.mjs';

function trimExtension(filePath) {
  return filePath.replace(/\.(md|mdx)$/, '');
}

function toPermalink(relativePath, frontMatter) {
  if (frontMatter.slug) {
    return frontMatter.slug.startsWith('/')
      ? frontMatter.slug
      : `/${frontMatter.slug}`;
  }

  const parsed = path.parse(relativePath);
  const dir = parsed.dir.replaceAll(path.sep, '/');

  if (frontMatter.id) {
    return `/${[dir, frontMatter.id].filter(Boolean).join('/')}`;
  }

  if (parsed.name === 'index') {
    return `/${dir}${dir ? '/' : ''}`;
  }

  return `/${trimExtension(relativePath).replaceAll(path.sep, '/')}`;
}

export default function docsProgressPlugin(context) {
  return {
    name: 'customknits-docs-progress',

    async loadContent() {
      const docsDir = path.join(context.siteDir, 'docs');
      const files = await fg(['**/*.md', '**/*.mdx'], {
        cwd: docsDir,
        dot: false,
      });

      const docs = await Promise.all(
        files.map(async (relativePath) => {
          const absolutePath = path.join(docsDir, relativePath);
          const raw = await fs.readFile(absolutePath, 'utf8');
          const {data, content} = matter(raw);
          const firstHeading = content.match(/^#\s+(.+)$/m)?.[1];

          return {
            path: `docs/${relativePath.replaceAll(path.sep, '/')}`,
            id: data.id || trimExtension(relativePath).replaceAll(path.sep, '/'),
            title: data.title || firstHeading || relativePath,
            permalink: toPermalink(relativePath, data),
            status: data.status || 'todo',
            product_area: data.product_area || null,
            owner: data.owner || null,
            last_reviewed: data.last_reviewed || null,
            doc_type: data.doc_type || null,
          };
        }),
      );

      return {
        docs: docs
          .filter(
            (doc) =>
              !shouldFilterDocsInProduction() ||
              !isDocHiddenInProduction(doc.status),
          )
          .sort((a, b) => a.path.localeCompare(b.path)),
      };
    },

    async contentLoaded({content, actions}) {
      actions.setGlobalData(content);
    },
  };
}
