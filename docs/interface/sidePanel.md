---
id: sidePanel
title: Боковая панель
sidebar_position: 3
---

# Боковая панель

Боковая панель отображает структуру проекта и позволяет управлять всеми его элементами.  
Здесь показаны **все выкройки**, **вязаные детали**, **заметки проекта**, а также действия, которые можно выполнять с каждым из них.

В нижней части панели отображается **номер текущей версии приложения**.

<img
  src={require('/img/interface/sidePanel.png').default}
  srcSet={require('/img/interface/sidePanel.png').default + " 2x"}
  alt="Боковая панель"
/>

---

## Управление размером панели

### Изменение ширины

Вы можете **менять ширину боковой панели**, потянув за вертикальный ползунок справа.

<img
  src={require('/img/interface/sidePanelSize1.png').default}
  srcSet={require('/img/interface/sidePanelSize1.png').default + " 2x"}
  alt="Изменение ширины боковой панели"
/>

<br />

<img
  src={require('/img/interface/sidePanelSize2.png').default}
  srcSet={require('/img/interface/sidePanelSize2.png').default + " 2x"}
  alt="Изменение ширины боковой панели"
/>

### Сворачивание панели

Чтобы **свернуть панель полностью**, нажмите на стрелку, которая появляется при наведении.

<img
  src={require('/img/interface/sidePanelSize2.png').default}
  srcSet={require('/img/interface/sidePanelSize2.png').default + " 2x"}
  alt="Сворачивание панели"
/>

### Разворачивание панели

Чтобы **развернуть панель**, нажмите на любую часть узкой свернутой области.

<img
  src={require('/img/interface/sidePanelSize3.png').default}
  srcSet={require('/img/interface/sidePanelSize3.png').default + " 2x"}
  alt="Разворачивание панели"
/>

---


## Содержимое проекта

В боковой панели отображаются все объекты, входящие в текущий проект:

- **выкройки**,  
- **вязаные детали**,  
- **заметки**.

Эти элементы представлены в виде компактного списка, из которого можно быстро переходить к нужному объекту.

Активный объект — тот, который открыт в рабочей области, — выделяется **рамкой**, чтобы вы всегда могли увидеть, с чем работаете в данный момент.

<img
  src={require('/img/interface/sidePanel.png').default}
  srcSet={require('/img/interface/sidePanel.png').default + " 2x"}
  alt="Боковая панель"
/>

В проекте может быть любое количество выкроек, деталей вязания и заметок.
Чтобы упростить навигацию при большом количестве объектов, разделы списка можно сворачивать и разворачивать.

<img
  src={require('/img/interface/foldersOpened.png').default}
  srcSet={require('/img/interface/foldersOpened.png').default + " 2x"}
  alt="Папки в списке открыты"
/>

<br />

<img
  src={require('/img/interface/foldersClosed.png').default}
  srcSet={require('/img/interface/foldersClosed.png').default + " 2x"}
  alt="Папки в списке закрыты"
/>

### Действия с выкройками и деталями вязания

С объектами проекта — выкройками и вязанными деталями — можно выполнять несколько действий прямо из боковой панели.

---

#### Добавление

Чтобы добавить новую выкройку или деталь вязания, наведите на заголовок списка и нажмите появившуюся кнопку **"+"**.  
Откроется модальное окно. Его содержимое различается для выкроек и вязания — подробности описаны в соответствующих разделах.

<img
  src={require('/img/interface/add.png').default}
  srcSet={require('/img/interface/add.png').default + " 2x"}
  alt="Добавление элемента"
/>

---

#### Переименование

Выкройку или вязаную деталь можно переименовать — просто нажмите на её название:

<img
  src={require('/img/interface/renameItem.png').default}
  srcSet={require('/img/interface/renameItem.png').default + " 2x"}
  alt="Переименование элемента"
/>

---

#### Иконки действий при наведении

Когда вы наводите курсор на элемент списка, появляются дополнительные действия:

<img
  src={require('/img/interface/itemActions.png').default}
  srcSet={require('/img/interface/itemActions.png').default + " 2x"}
  alt="Действия элемента при наведении"
/>

---

#### Превью

Для объектов с визуальным содержимым доступно **превью**, позволяющее быстро просмотреть выкройку или вязаную деталь без открытия в рабочей области.

<img
  src={require('/img/interface/preview.png').default}
  srcSet={require('/img/interface/preview.png').default + " 2x"}
  alt="Превью элемента"
/>

---

#### Копирование

Вы можете создать копию существующей выкройки или детали вязания:

<img
  src={require('/img/interface/copy.png').default}
  srcSet={require('/img/interface/copy.png').default + " 2x"}
  alt="Копирование элемента"
/>

---

#### Удаление

Удалить элемент можно через соответствующую иконку:

<img
  src={require('/img/interface/delete.png').default}
  srcSet={require('/img/interface/delete.png').default + " 2x"}
  alt="Удаление элемента"
/>

Перед удалением появится окно подтверждения:

<img
  src={require('/img/interface/confirmDelete.png').default}
  srcSet={require('/img/interface/confirmDelete.png').default + " 2x"}
  alt="Окно подтверждения удаления"
/>

Если вы не хотите видеть это окно каждый раз, поставьте галочку **«Больше не показывать»**.  
Это предпочтение будет сохранено между сессиями.

Для выкроек и вязаных деталей, у которых есть заметки, доступно дополнительное действие — **Просмотр заметок**.

<img
  src={require('/img/interface/showNote.png').default}
  srcSet={require('/img/interface/showNote.png').default + " 2x"}
  alt="Просмотр заметок"
/>

<br />

<img
  src={require('/img/interface/openedNote.png').default}
  srcSet={require('/img/interface/openedNote.png').default + " 2x"}
  alt="Открытая заметка"
/>

---


### Действия с заметками

В разделе **Заметки** можно:

- **развернуть** список заметок,
- **просмотреть** любую заметку,
- **удалить** заметку.

<img
  src={require('/img/interface/deleteNote.png').default}
  srcSet={require('/img/interface/deleteNote.png').default + " 2x"}
  alt="Удаление заметки"
/>

Добавлять новые заметки в этом разделе **нельзя**, поскольку заметки всегда принадлежат конкретной выкройке или конкретной вязаной детали.  
Создание заметок происходит **в интерфейсе соответствующего объекта**, а затем они отображаются в этом списке.

Вязаные детали и выкройки, у которых есть заметки, помечаются специальным значком:

<img
  src={require('/img/interface/itemWithNote.png').default}
  srcSet={require('/img/interface/itemWithNote.png').default + " 2x"}
  alt="Объекты с заметками помечены значком"
/>

