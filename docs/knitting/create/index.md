# Создание вязания

Вязание в редакторе можно создать двумя способами:

- **Образец** — создаётся прямоугольник 20×30 петель выбранной пряжей и плотностью.
- **Создать по выкройке** — автоматически заполнить вязание точками выбранной выкройки.

## Выбор способа создания

<img
  src={require('/img/knitting/createNewKnittingForm.png').default}
  srcSet={require('/img/knitting/createNewKnittingForm.png').default + " 2x"}
  alt="Окно выбора типа нового вязания"
/>


<img
  src={require('/img/knitting/createFromPatternButton.png').default}
  srcSet={require('/img/knitting/createFromPatternButton.png').default + " 2x"}
  alt="Кнопка создания вязания по выкройке"
/>
---

## Создание вязания по выкройке

После выбора этого варианта откроется форма с параметрами.  

<img
  src={require('/img/knitting/createFromPatternForm.png').default}
  srcSet={require('/img/knitting/createFromPatternForm.png').default + " 2x"}
  alt="Форма создания вязания по выкройке"
/>

Сверху расположены **три ключевые параметра**: выбранная выкройка, пряжа и плотность.

### Выбранная выкройка

<img
  src={require('/img/knitting/patternAndTension.png').default}
  srcSet={require('/img/knitting/patternAndTension.png').default + " 2x"}
  alt="Выбранная выкройка, пряжа и плотность"
/>

Внутри этой формы, вы все еще можете поменять выбранную выкройку, пряжу и плотность.

### Пряжа

Здесь отображается выбранная пряжа, которую редактор использует для создания петель.

### Плотность

Определяет размеры петель и влияет на соответствие вязания выкройке.

---

## Настройки генерации петель

### Прибавки и убавки

<img
  src={require('/img/knitting/allowedIncrease.png').default}
  srcSet={require('/img/knitting/allowedIncrease.png').default + " 2x"}
  alt="Настройка где разрешены прибавки и убавки"
/>

Эта настройка позволяет определить, в каких рядах разрешены изменения формы:

- в чётных и нечётных рядах  
- только в нечётных  
- только в чётных  

Это полезно, если вы хотите исключить прибавки/убавки, например, в изнаночных рядах.

---

## Направление рядов

### Тип блока

<img
  src={require('/img/knitting/rowDirectionType.png').default}
  srcSet={require('/img/knitting/rowDirectionType.png').default + " 2x"}
  alt="Тип блока: туда-обратно или по кругу"
/>

- **Туда-обратно** — ряды выполняются в противоположных направлениях.  
- **По кругу** — следующий ряд вяжется в том же направлении, что и предыдущий.


### Первый проход ряда

<img
  src={require('/img/knitting/firstRowDirection.png').default}
  srcSet={require('/img/knitting/firstRowDirection.png').default + " 2x"}
  alt="Направление первого ряда"
/>

Определяет, откуда начинается первый ряд:

- → слева направо  
- ← справа налево  

### Направление вязания

<img
  src={require('/img/knitting/knittingDirection.png').default}
  srcSet={require('/img/knitting/knittingDirection.png').default + " 2x"}
  alt="Направление вязания по вертикали"
/>

Задаёт, где будет первый ряд по вертикали:

- **Снизу вверх**  
- **Сверху вниз**

---

## Поперечное вязание

Если включить эту опцию, редактор:

- повернёт выкройку на **90° по часовой стрелке**,  
- построит вязание по этой повернутой выкройке, как если вязать поперек.

---

## Создание вязания

<img
  src={require('/img/knitting/createFromPatternForm.png').default}
  srcSet={require('/img/knitting/createFromPatternForm.png').default + " 2x"}
  alt="Форма создания вязания по выкройке"
/>

Когда все параметры заданы, нажмите **Создать**, и редактор построит вязание по выбранной выкройке и настройкам.

Если не поставить галочку Создать новое вязание, то перезапишется открытое в данный момент вязание. Будьте осторожны.

---
