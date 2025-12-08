---
sidebar_position: 4
---

# Действия с выделенными петлями

Когда на полотне есть выделенные петли, поверх полотна появляется панель действий.  
Она содержит операции, которые можно выполнить над выделенной областью.

<img
  src={require('/img/knitting/selectedStitchesActionsPanel.png').default}
  srcSet={require('/img/knitting/selectedStitchesActionsPanel.png').default + " 2x"}
  alt="Панель действий с выделенными петлями"
/>

Кроме того, многие команды доступны через горячие клавиши.

---

## Горячие клавиши

- **`Ctrl`/`Cmd` + `C`** — копировать выделение.  
- **`Ctrl`/`Cmd` + `X`** — вырезать выделение.  
- **`Ctrl`/`Cmd` + `V`** — вставить в выделенную область.  
- **`Delete` / `Backspace`** — очистить выделенную область.  
- **`Alt` + `Backspace`** (или **`Shift` + `G`**) — залить выделение текущей петлёй.  
- **`Ctrl`/`Cmd` + `D`** — снять выделение.

---

# Основные операции

## Копирование выделенных петель

<img
  src={require('/img/knitting/selectedStitchesActionsCopy.png').default}
  srcSet={require('/img/knitting/selectedStitchesActionsCopy.png').default + " 2x"}
  alt="Скопировать выделенную область"
/>

Выделенная область копируется в буфер обмена как прямоугольная матрица петель.

---

## Вставка из буфера обмена

<img
  src={require('/img/knitting/selectedStitchesActionsPast.png').default}
  srcSet={require('/img/knitting/selectedStitchesActionsPast.png').default + " 2x"}
  alt="Вставить выделенную область"
/>

Вставка заменяет петли внутри выделенной области.  
Если размер буфера меньше выделения, вставляется только доступная часть.  
Если больше — лишнее обрезается.

### Настройки вставки

<img
  src={require('/img/knitting/selectedStitchesActionsPastSettings.png').default}
  srcSet={require('/img/knitting/selectedStitchesActionsPastSettings.png').default + " 2x"}
  alt="Настройки вставки из буфера"
/>

Можно настроить, какие свойства будут вставляться:

- Переносить пустые клетки из буфера  
- Изменять типы петель  
- Изменять пряжу  
- Изменять плотность  

---

## Очистка выделенной области

<img
  src={require('/img/knitting/selectedStitchesActionsClear.png').default}
  srcSet={require('/img/knitting/selectedStitchesActionsClear.png').default + " 2x"}
  alt="Очистить выделенную область"
/>

Удаляет петли внутри выделения — они становятся пустыми клетками.

---

## Отражение выделенной области

Доступно два варианта:

- **Отразить по горизонтали**
- **Отразить по вертикали**

<img
  src={require('/img/knitting/mirror.png').default}
  srcSet={require('/img/knitting/mirror.png').default + " 2x"}
  alt="Кнопки отражения выделенной области"
/>

### Настройки отражения

Работают аналогично настройкам вставки:

- Переносить пустые клетки  
- Изменять типы петель  
- Изменять пряжу  
- Изменять плотность  

<img
  src={require('/img/knitting/selectedStitchesActionsPastSettings.png').default}
  srcSet={require('/img/knitting/selectedStitchesActionsPastSettings.png').default + " 2x"}
  alt="Настройки трансформации выделенной области"
/>

---

# Рисование внутри выделенной области

Инструменты:

- **Линия**
- **Четверть эллипса**

Настройки одинаковые:

<img
  src={require('/img/knitting/lineSettings.png').default}
  srcSet={require('/img/knitting/lineSettings.png').default + " 2x"}
  alt="Настройки рисования"
/>

Доступные режимы:

- Только граница  
- Заливка слева  
- Заливка справа  

---

# Линия

<img
  src={require('/img/knitting/line.png').default}
  srcSet={require('/img/knitting/line.png').default + " 2x"}
  alt="Инструмент Линия"
/>

### Только граница

<img
  src={require('/img/knitting/lineType1.png').default}
  srcSet={require('/img/knitting/lineType1.png').default + " 2x"}
  alt="Линия — только граница"
/>

### Заливка слева

<img
  src={require('/img/knitting/lineType2.png').default}
  srcSet={require('/img/knitting/lineType2.png').default + " 2x"}
  alt="Линия — заливка слева"
/>

### Заливка справа

<img
  src={require('/img/knitting/lineType3.png').default}
  srcSet={require('/img/knitting/lineType3.png').default + " 2x"}
  alt="Линия — заливка справа"
/>

---

# Четверть эллипса

### Только граница

<img
  src={require('/img/knitting/ellipseType1.png').default}
  srcSet={require('/img/knitting/ellipseType1.png').default + " 2x"}
  alt="Эллипс — только граница"
/>

### Заливка слева

<img
  src={require('/img/knitting/ellipseType2.png').default}
  srcSet={require('/img/knitting/ellipseType2.png').default + " 2x"}
  alt="Эллипс — заливка слева"
/>

### Заливка справа

<img
  src={require('/img/knitting/ellipseType3.png').default}
  srcSet={require('/img/knitting/ellipseType3.png').default + " 2x"}
  alt="Эллипс — заливка справа"
/>

---

# Заливка выделенной области

Позволяет заменить все петли внутри выделения на **выбранную петлю**  
(пряжу, плотность и тип — в зависимости от настроек).

<img
  src={require('/img/knitting/fill.png').default}
  srcSet={require('/img/knitting/fill.png').default + " 2x"}
  alt="Кнопка заливки выделенной области"
/>

### Настройки заливки

- Переносить пустые клетки  
- Изменять типы петель  
- Изменять пряжу  
- Изменять плотность  

---

# Затайливание (заполнение узором)

Заменяет содержимое выделения **повторяющимся узором** — матрицей петель.

<img
  src={require('/img/knitting/tile.png').default}
  srcSet={require('/img/knitting/tile.png').default + " 2x"}
  alt="Кнопка затайливания выделенной области"
/>

Используется текущий выбранный узор.  
Подробнее о них — в следующей статье.

---

# Дополнительно

- Все действия выполняются только **внутри выделения**.  
- Если выделение отсутствует, панель действий не показывается.  
- Вырезание (`Ctrl`/`Cmd` + `X`) работает как копирование, но очищает выделение после вставки в буфер.

