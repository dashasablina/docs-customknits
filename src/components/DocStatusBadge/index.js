import React from 'react';

const STATUS_CONFIG = {
  todo: {
    label: 'TODO',
    className: 'doc-status-badge--todo',
    description: 'Статью нужно написать или серьезно доработать.',
  },
  draft: {
    label: 'TODO',
    className: 'doc-status-badge--todo',
    description: 'Статью нужно написать или серьезно доработать.',
  },
  wip: {
    label: 'WIP',
    className: 'doc-status-badge--wip',
    description: 'Статья сейчас в работе.',
  },
  done: {
    label: 'DONE',
    className: 'doc-status-badge--done',
    description: 'Статья готова для текущей версии.',
  },
  current: {
    label: 'DONE',
    className: 'doc-status-badge--done',
    description: 'Статья готова для текущей версии.',
  },
  'needs-fix': {
    label: 'FIX',
    className: 'doc-status-badge--fix',
    description: 'Требуется исправить. В будущем этот статус можно подтягивать из app repo.',
  },
  'requires-fix': {
    label: 'FIX',
    className: 'doc-status-badge--fix',
    description: 'Требуется исправить. В будущем этот статус можно подтягивать из app repo.',
  },
  'needs-review': {
    label: 'FIX',
    className: 'doc-status-badge--fix',
    description: 'Требуется проверка и возможное исправление.',
  },
  outdated: {
    label: 'FIX',
    className: 'doc-status-badge--fix',
    description: 'Статья устарела и требует исправления.',
  },
  legacy: {
    label: 'ARCHIVE',
    className: 'doc-status-badge--legacy',
    description: 'Материал из старой структуры, сохранен для переноса.',
  },
};

export function getDocStatusConfig(status) {
  const normalizedStatus = String(status || 'todo').trim().toLowerCase();
  return STATUS_CONFIG[normalizedStatus] || {
    label: normalizedStatus.toUpperCase(),
    className: 'doc-status-badge--todo',
    description: 'Нестандартный статус документа.',
  };
}

export default function DocStatusBadge({frontMatter, metadata}) {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  const status = frontMatter?.status || 'todo';
  const config = getDocStatusConfig(status);
  const lastReviewed = frontMatter?.last_reviewed;
  const owner = frontMatter?.owner;
  const source = metadata?.source;

  return (
    <aside className={`doc-status-badge ${config.className}`}>
      <div className="doc-status-badge__top">
        <span className="doc-status-badge__label">{config.label}</span>
        <span className="doc-status-badge__title">Статус документации</span>
      </div>
      <div className="doc-status-badge__body">
        {config.description}
        {owner && <span> Владелец: {owner}.</span>}
        {lastReviewed && <span> Проверено: {lastReviewed}.</span>}
      </div>
      {source && <div className="doc-status-badge__source">{source}</div>}
    </aside>
  );
}
