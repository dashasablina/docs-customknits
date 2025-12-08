---
id: graphics
title: "Работа с графикой"
sidebar_label: "Графика"
---

# Работа с графикой

Редактор позволяет создавать дизайн для вязания с помощью **фигур** и **картинок**.  
Все элементы размещаются поверх вязания и затем могут быть **вклеены** в петли.

---

## Панель «Картинки»

В панели инструментов выберите инструмент:

<img
  src={require('/img/knitting/imgTool.png').default}
  srcSet={require('/img/knitting/imgTool.png').default + " 2x"}
  alt="Удаление вязания из боковой панели"
/>

Откроется панель, где доступны два режима:

- **Добавить картинку**
- **Добавить фигуру**

---

# Фигуры

## Добавление фигуры

Нажмите кнопку «Фигура», выберите цвет и форму.  

<img
  src={require('/img/knitting/addShape.png').default}
  srcSet={require('/img/knitting/addShape.png').default + " 2x"}
  alt="Добавление фигуры"
/>

<img
  src={require('/img/knitting/shapeTypes.png').default}
  srcSet={require('/img/knitting/shapeTypes.png').default + " 2x"}
  alt="Добавление фигуры"
/>

Фигуру добавится на холст:

<img
  src={require('/img/knitting/addedShape.png').default}
  srcSet={require('/img/knitting/addedShape.png').default + " 2x"}
  alt="Фигура на холсте"
/>

Доступные действия:

- перемещать;
- вращать;
- масштабировать.

Вы можете разместить несколько фигур и комбинировать их:

<img
  src={require('/img/knitting/shapeDesign.png').default}
  srcSet={require('/img/knitting/shapeDesign.png').default + " 2x"}
  alt="Дизайн из фигур"
/>
---

## Перед вклейкой фигур

### Что именно вклеивается

Только та часть фигуры, которая **находится над областью вязания**.  
Если элемент выходит за край — вклеится только видимая часть.

### Сколько цветов использовать

В панели укажите максимальное количество цветов

Если:

- цветов у фигур меньше — используются фактические;
- цветов у фигур больше — близкие цвета будут объединены автоматически.

---

## Вклеивание фигур в вязание

Когда всё готово, нажмите:

<img
  src={require('/img/knitting/insetrIntoKnitting.png').default}
  srcSet={require('/img/knitting/insetrIntoKnitting.png').default + " 2x"}
  alt="Вклеить графику в вязание"
/>

После обработки редактор превратит фигуры в петли:

<img
  src={require('/img/knitting/insertedShapeDesign.png').default}
  srcSet={require('/img/knitting/insertedShapeDesign.png').default + " 2x"}
  alt="Готовые петли"
/>

Все новые цвета пряжи автоматически появятся в списке пряж:

<img
  src={require('/img/knitting/updatedYarnList.png').default}
  srcSet={require('/img/knitting/updatedYarnList.png').default + " 2x"}
  alt="Добавление пряжи в список"
/>

---

# Картинки

Если выбрать «Добавить картинку», редактор предложит выбрать изображение с вашего компьютера:

<img
  src={require('/img/knitting/addImage.png').default}
  srcSet={require('/img/knitting/addImage.png').default + " 2x"}
  alt="Добавление пряжи в список"
/>

Картинку нужно разместить на холсте точно так же, как фигуру:

- перемещать,
- масштабировать,
- вращать,
- накладывать частично на область вязания,
- использовать сразу несколько картинок.


<img
  src={require('/img/knitting/placeImage.png').default}
  srcSet={require('/img/knitting/placeImage.png').default + " 2x"}
  alt="Картинка поверх вязания"
/>

---

## Количество цветов

Очень важный параметр — **сколько цветов пряжи использовать**.

- Чем меньше цветов — тем меньше деталей и проще вязать.
- Чем больше цветов — тем ближе результат к оригиналу.

Пример — **3 цвета**:


<img
  src={require('/img/knitting/image3colors.png').default}
  srcSet={require('/img/knitting/image3colors.png').default + " 2x"}
  alt="Картинка в 3 цветах"
/>

Пример — **6 цветов**:

<img
  src={require('/img/knitting/image6colors.png').default}
  srcSet={require('/img/knitting/image6colors.png').default + " 2x"}
  alt="Картинка в 6 цветах"
/>

Пример — **6 цветов и были изменены масштаб и положение**:

<img
  src={require('/img/knitting/editedImage.png').default}
  srcSet={require('/img/knitting/editedImage.png').default + " 2x"}
  alt="Картинка с масштабированием и перемещением"
/>

При высокой плотности петли получаются мельче, и результат отличается:

<img
  src={require('/img/knitting/image6colorsHighGauge.png').default}
  srcSet={require('/img/knitting/image6colorsHighGauge.png').default + " 2x"}
  alt="Картинка с масштабированием и перемещением"
/>

---

## На что влияет список пряжи

Редактор учитывает **уже существующие** цвета пряжи в проекте.  
Они считаются доступными и могут быть использованы при вставке картинки.

Если в списке слишком много случайных цветов — картинка может получиться шумной.  
Поэтому перед вставкой желательно удалить ненужные цвета.

---

## Вклеивание картинки

Процесс такой же, как у фигур:

1. Разместите изображение поверх вязания.
2. Установите число цветов.
3. Нажмите «Вклеить в вязание».

После вставки:

- картинка превращается в петли;
- новые цвета автоматически появляются в списке пряжи.

Дальше вы можете работать с вязанием обычным образом. Например, менять цвета пряжи, делать пряжу секционной.

Пример — **Изменили цвета пряжи после вставки картинки**:

<img
  src={require('/img/knitting/editYarnAfterImagePaste.png').default}
  srcSet={require('/img/knitting/editYarnAfterImagePaste.png').default + " 2x"}
  alt="Редактирование цветов после вставки картинки"
/>
---

# Итоги

- Можно использовать **и фигуры, и картинки**, комбинировать их как угодно.
- Оба вида графики можно размещать, вращать, масштабировать.
- Результат всегда учитывает **плотность вязания**, количество цветов и доступную пряжу.
- Вставленные элементы превращаются в петли — полностью редактируемые.

