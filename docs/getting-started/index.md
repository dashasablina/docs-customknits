---
id: getting-started
title: "Начало работы"
description: "Быстрый вход в CustomKnits: что можно сделать в редакторе и с чего начать."
slug: /start
sidebar_label: "Обзор"
sidebar_position: 1
doc_type: "how-to"
product_area: "general"
owner: "docs"
status: "done"
last_reviewed: "2026-09-11"
---

# Начало работы

CustomKnits помогает превратить форму детали в схему вязания, а также работать
со схемой напрямую. В проекте могут быть выкройки, схемы вязания, пряжа и
плотность; они не обязаны существовать все сразу.

Эта страница поможет выбрать первый маршрут. Не нужно заранее знать все
инструменты или выстраивать работу в единственном правильном порядке.

## Выберите, с чего начать

### Хочу подготовить выкройку

Создайте или откройте **выкройку** — форму детали в сантиметрах. Затем можно
построить схему вязания по этой форме.

- [Что такое выкройка](../concepts/pattern.md)
- [Нарисовать и изменить выкройку](../pattern-work/draw-and-edit.md)
- [Создать выкройку по размерам готового изделия](../pattern-work/from-measurements.md)

{process.env.NODE_ENV !== 'production' && (
  <ul>
    <li><a href="/pattern-work/pattern-templates-catalog">Каталог шаблонов выкроек</a></li>
    <li><a href="/pattern-work/prepare-pattern-for-knitting">Настроить линии и блоки выкройки</a></li>
  </ul>
)}

### Хочу сразу работать со схемой вязания

Создайте **схему вязания** и настройте пряжу и плотность. Схема может
существовать независимо от выкройки.

- [Что такое схема вязания](../concepts/knitting.md)
- [Нарисовать образец узора или схему](../knitting-work/draw-swatch-or-chart.md)
- [Добавить цветной узор](../knitting-work/add-color-pattern.md)
- [Использовать несколько узоров в одной детали](../knitting-work/combine-patterns.md)
- [Проверить и поправить готовую схему](../knitting-work/check-and-adjust-chart.md)
- [Настроить пряжу](../concepts/yarn.md)
- [Настроить плотность](../concepts/gauge.md)

{process.env.NODE_ENV !== 'production' && (
  <ul>
    <li><a href="/knitting-work/choose-or-create-pattern">Выбрать или создать узор</a></li>
  </ul>
)}

### Хочу получить схему по готовой выкройке

Сначала проверьте плотность, затем используйте расчёт. Результатом станет
самостоятельная схема вязания, которую можно редактировать вручную.

- [Рассчитать схему вязания по выкройке](../workflows/pattern-to-knitting/calculate-from-pattern.md)

### Хочу вязать по уже созданной схеме

Откройте **режим вязания**: он показывает схему, помогает вести счёт рядов и
автоматически создаёт порядные инструкции для текущей схемы.

- [Режим вязания](../concepts/knitting-mode.md)
- [Оценить расход пряжи](../knitting-use/estimate-yarn-usage.md)
- [Вязать с отображением прогресса](../knitting-use/track-knitting-progress.md)
- [Смотреть порядные текстовые инструкции](../knitting-use/read-row-instructions.md)

### Хочу сохранить или передать проект

- [Создать проект](../work-with-project/create-project.md)
- [Сохранить проект](../work-with-project/save-project.md)
- [Открыть проект](../work-with-project/open-project.md)
- [Поделиться проектом](../work-with-project/share-project.md)
- [Работать с проектом на телефоне](../work-with-project/use-project-on-mobile.md)
- [Организовать проект](../work-with-project/organize-project.md)
- [Создать коллаж для проекта](../work-with-project/create-project-collage.md)

{process.env.NODE_ENV !== 'production' && (
  <>
    <h3>Хочу работать с проектом</h3>

    <ul>
      <li><a href="/work-with-project/save-project">Сохранить проект</a></li>
      <li><a href="/work-with-project/share-project">Поделиться проектом</a></li>
    </ul>
  </>
)}

## Как устроен проект

В редакторе есть два самостоятельных рабочих пространства:

- **Выкройки** — форма детали в сантиметрах.
- **Схемы вязания** — петли и ряды.

Пряжа и плотность дополняют схему вязания. Выкройки и схемы могут существовать
независимо друг от друга.
