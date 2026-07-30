import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function HomePage() {
  return (
    <Layout
      title="Документация"
      description="Документация для редактора вязания CustomKnits"
    >
      <main className="container margin-vert--lg">
        <h1>Документация CustomKnits</h1>
        <p>Выберите раздел, чтобы начать работу с редактором.</p>
        <ul>
          <li>
            <Link to="/concepts/">Из чего состоит редактор</Link>
          </li>
          <li>
            <Link to="/workflows/pattern-to-knitting/calculate-from-pattern">
              Сценарии
            </Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
