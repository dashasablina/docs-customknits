import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';
import {getDocStatusConfig} from '@site/src/components/DocStatusBadge';

function normalizeStatus(status) {
  return getDocStatusConfig(status).label;
}

export default function DevProgressPage() {
  const progressData = usePluginData('customknits-docs-progress') || {docs: []};

  if (process.env.NODE_ENV === 'production') {
    return (
      <Layout title="Dev progress">
        <main className="container margin-vert--lg">
          <h1>Dev progress</h1>
          <p>Эта страница предназначена для локальной разработки.</p>
        </main>
      </Layout>
    );
  }

  const docs = progressData.docs;
  const groups = docs.reduce((acc, doc) => {
    const label = normalizeStatus(doc.status);
    acc[label] = acc[label] || [];
    acc[label].push(doc);
    return acc;
  }, {});

  const order = ['WIP', 'FIX', 'TODO', 'DONE', 'ARCHIVE'];

  return (
    <Layout
      title="Dev progress"
      description="Локальная страница прогресса документации"
    >
      <main className="container margin-vert--lg docs-dev-progress">
        <h1>Dev progress</h1>
        <p>
          Локальная страница для быстрой проверки статусов статей. В production
          подробная таблица скрыта.
        </p>
        <p className="docs-dev-progress__notice">
          Если статус в front matter изменился, а эта таблица не обновилась,
          перезапустите dev-сервер через `npm run dev:clean`: Docusaurus не
          всегда обновляет docs metadata через hot reload.
        </p>

        <div className="docs-dev-progress__summary">
          {order.map((label) => (
            <div key={label} className="docs-dev-progress__card">
              <span className="docs-dev-progress__count">
                {groups[label]?.length || 0}
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>

        {order.map((label) => {
          const items = groups[label] || [];
          if (!items.length) {
            return null;
          }
          return (
            <section key={label} className="docs-dev-progress__section">
              <h2>{label}</h2>
              <div className="docs-dev-progress__table">
                {items.map((doc) => {
                  const config = getDocStatusConfig(doc.status);
                  return (
                    <div key={doc.path} className="docs-dev-progress__row">
                      <span className={`doc-status-mini ${config.className}`}>
                        {config.label}
                      </span>
                      <Link to={doc.permalink}>{doc.title || doc.id}</Link>
                      <span>{doc.product_area || '-'}</span>
                      <span>{doc.owner || '-'}</span>
                      <span>{doc.last_reviewed || '-'}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>
    </Layout>
  );
}
