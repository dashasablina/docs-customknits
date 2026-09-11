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
            <Link to="/start">Начать работу</Link>
          </li>
          <li>
            <Link to="/pattern-work/draw-and-edit-pattern">Подготовить выкройку</Link>
          </li>
          <li>
            <Link to="/workflows/pattern-to-knitting/calculate-from-pattern">
              Создать схему вязания по выкройке
            </Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
