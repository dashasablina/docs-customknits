---
id: manage-yarns
title: "Добавить и настроить пряжу"
description: "Как открыть список пряжи, добавить, скопировать, удалить пряжу и задать метраж."
sidebar_label: "Добавить и настроить пряжу"
sidebar_position: 4
doc_type: "how-to"
product_area: "knitting"
owner: "docs"
status: "done"
last_reviewed: "2026-06-07"
---

# Добавить и настроить пряжу

В проекте может быть несколько пряж. Это удобно, если в схеме используются разные цвета или материалы.

## Открыть список пряжи

1. Откройте панель свойств.
2. Нажмите на иконку клубка.
3. Откроется список пряжи проекта.

В свернутом виде панели пряжа остается доступна через ту же иконку клубка.

<img
  src={require('/img/knitting/yarn/properties-panel-collapsed.png').default}
  srcSet={require('/img/knitting/yarn/properties-panel-collapsed.png').default + " 2x"}
  alt="Свернутая панель свойств с иконкой пряжи"
/>

<img
  src={require('/img/knitting/yarn/yarn-list-basic.png').default}
  srcSet={require('/img/knitting/yarn/yarn-list-basic.png').default + " 2x"}
  alt="Список пряжи проекта"
/>

## Что можно сделать в списке

- добавить новую пряжу;
- скопировать существующую пряжу;
- изменить цвет;
- задать метраж;
- настроить визуальные эффекты;
- удалить пряжу.

Удалить можно только ту пряжу, которой сейчас не связаны петли в проекте. У каждой петли должна быть выбрана пряжа, чтобы редактор понимал, каким цветом ее показывать и к какому расходу ее относить.

## Задать метраж

Если указать метраж, редактор сможет оценить расход пряжи.

<img
  src={require('/img/knitting/yarn/yarn-list-yardage.png').default}
  srcSet={require('/img/knitting/yarn/yarn-list-yardage.png').default + " 2x"}
  alt="Пряжа с указанным метражом в списке"
/>

<img
  src={require('/img/knitting/yarn/yarn-yardage-form.png').default}
  srcSet={require('/img/knitting/yarn/yarn-yardage-form.png').default + " 2x"}
  alt="Форма задания метража пряжи"
/>

Подробно расход будет описан в статье про статистику проекта.

## Настроить визуальные эффекты

В списке пряжи можно настроить секционное окрашивание, эффект ручного окрашивания и платинг.

Эти настройки помогают заранее посмотреть, как пряжа может лечь на схему. Подробные шаги описаны в отдельных сценариях:

- [Настроить секционную пряжу](./setup-sectional-yarn.md)
- [Настроить платинг](./setup-yarn-plating.md)
