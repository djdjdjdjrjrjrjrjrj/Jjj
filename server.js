const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));   // чтобы статичные файлы были доступны

// Создаём или подключаемся к базе данных
const db = new sqlite3.Database('database.sqlite');

// Создаем таблицу, если её нет
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  )`);
});

// Эндпоинт для добавления
app.post('/add', (req, res) => {
  const { text } = req.body;
  if (text) {
    db.run('INSERT INTO entries (name) VALUES (?)', [text], function(err) {
      if (err) {
        res.json({ message: 'Ошибка при добавлении' });
      } else {
        res.json({ message: 'Добавлено успешно' });
      }
    });
  } else {
    res.json({ message: 'Нет данных' });
  }
});

// Эндпоинт для поиска
app.post('/search', (req, res) => {
  const { query } = req.body;
  db.all('SELECT name FROM entries WHERE name LIKE ?', [`%${query}%`], (err, rows) => {
    if (err) {
      res.json({ matches: [] });
    } else {
      const matches = rows.map(row => row.name);
      res.json({ matches });
    }
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
