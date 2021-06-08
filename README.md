# To Do App

![](https://img.shields.io/badge/version-1.0.0-blue)
![](https://img.shields.io/badge/react-17.0.2-inactive)
![](https://img.shields.io/badge/typescript-4.3.2-green)

## Запуск проекта

```bash
$ yarn start # Команда для запуска
```

## Тестирование
### Unit Тесты

```bash
$ yarn test # Команда для запуска
```

Для unit тестов используюeтся библиотека [Jest](https://jestjs.io/).

Для того что бы запустить конкретный тест, нужно после команды запуска дописать путь к этому файлу `yarn test ./path/to/filename.test.js`.

Если нужно запустить все тесты в конкретной директории, можно воспользоваться такой записью `yarn test ./directory/.*.test.js`

## Visual Studio Code

### eslint

*settings.json*
```json
{
  "eslint.alwaysShowStatus": true,
  "eslint.workingDirectories": ["./src"],
  "eslint.validate": [
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  }
}
```
