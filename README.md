[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/QKgrsi9G)
## Правила и регламент

- [Правила, рекомендации и порядок проведения](https://github.com/hexlet-college-students/exam-rules)

## Требования и рекомендации

- Нельзя менять уже написанный код, тесты и другие файлы добавленные в проект
- Помимо стандартной библиотеки, вы можете использовать все что импортировано. Что не импортировано, то не используется.
- Выполняйте коммиты и пуши как можно чаще. Так вы будете видеть какие из тестов сработают, а какие нет.
- Во время работы не забывайте запускать саму утилиту и `npm test`

## Задание

Ваша задача, используя библиотеку React, написать и экспортировать компонент, который делает запрос на получение списка с пользователями и рендерит их в таблице. Данные с пользователями находятся по адресу **\_\_fixtures\_\_/users.js**.

Таблица должна иметь заглавие c полями, которые указаны в данных о пользователях (рассмотрите данные самостоятельно).

Пример использования:

```html
  <UsersTable />
```

Результат:

```html
<div id="container" class="container m-3">
  <table>
    <thead>
      <tr>
        <td>id</td>
        <td>name</td>
        <td>email</td>
        ...
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>4</td>
        <td>Анна Смирнова</td>
        ...
      </tr>
    </tbody>
  </table>
  <button>Sort</button>
</div>
```

## Для запуска приложения

```bash
make run # запускается сервер и клиент
```

### 1 задача

В файле **src/UsersTable.jsx** cоздайте и экспортируйте по умолчанию компонент \<UsersTable/>, в котором есть таблица, содержащая \<thead> и \<tbody>. Добавьте в \<thead> следующий html:

```html
  <tr>
    <td>id</td>
    <td>name</td>
    <td>email</td>
    <td>phone</td>
    <td>registration_date</td>
    <td>status</td>
  </tr>
```

### 2 задача

В компоненте \<UsersTable/> используйте хук `useEffect()` для запроса на сервер за данными. Вам необходимо сделать `get` запрос на сервер по адресу `/users` и отрендерить список пользователей в таблице, где для каждого пользователя рендерится ряд с соответствующими данными.

Отсортируйте входящих пользователей по имени, в порядке с А до Я.

```html
  <tbody>
    <tr>
      <td>4</td>
      <td>Анна Смирнова</td>
      <td>anna.smirnova@example.com</td>
      ...
    </tr>
  </tbody>
```

### 3 задача

В файле **src/SortUsers.jsx** cоздайте и экспортируйте по умолчанию компонент \<SortUsers/>, который отвечает за управление порядком пользователей. Он должен иметь кнопку с текстом *Sort*. Поместите данный компонент в компонент **\<UsersTable/>** сразу после таблицы.

### 4 задача

Сделайте так, чтобы при клике на кнопку *Sort* пользователи были отсортированы по именам в обратном порядке, а при еще одном клике, сортировка переворачивалась.

# Список доступных сайтов

- [Javascript](https://developer.mozilla.org/ru/docs/Learn/JavaScript)
- [Web development](https://developer.mozilla.org/en-US/docs/Learn)
- [Node](https://nodejs.org/ru/docs)
- [Hexlet](https://hexlet.io)
- [NPM](https://docs.npmjs.com/)
- [lodash](https://lodash.com/docs)
- [Github](https://github.com/)
- [Github Classrom](https://classroom.github.com/)
- [Github Docs](https://docs.github.com/ru)
- [ESLint](https://eslint.org/docs/latest/)
- [React](https://react.dev/)
