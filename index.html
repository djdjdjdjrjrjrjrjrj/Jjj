<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Гитхаб страница</title>
<style>
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-image: url('https://static34.tgcnt.ru/posts/_0/70/702c0be4f35cdff4fd2fc7ee85a5c533.jpg');
    background-size: cover;
    background-position: center;
    font-family: Arial, sans-serif;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Верхняя кнопка + */
  #topButton {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    padding: 10px 20px;
    cursor: pointer;
  }

  /* Форма для добавления текста */
  #addForm {
    display: none;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: rgba(255,255,255,0.9);
    padding: 10px;
    border-radius: 8px;
  }

  /* Центральный текст */
  #centralText {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: blue;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 2px solid red;
    text-decoration: underline;
    text-align: center;
  }

  /* Нижняя панель поиска */
  #bottomPanel {
    position: fixed;
    bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  #searchInput {
    padding: 10px;
    width: 300px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  #searchBtn {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }

  /* Место для результатов */
  #resultsContainer {
    margin-top: 20px;
    width: 80%;
    max-width: 600px;
    background: rgba(255,255,255,0.8);
    padding: 10px;
    border-radius: 8px;
  }
</style>
</head>
<body>

<!-- Верхняя кнопка + -->
<button id="topButton">+</button>

<!-- Форма добавления текста -->
<div id="addForm">
  <input type="text" id="newTextInput" placeholder="Введите юзернейм или имя" />
  <button id="addTextBtn">Добавить</button>
</div>

<!-- Центрированный текст -->
<div id="centralText">
  <div style="border-bottom: 2px solid red; color: blue;">
    Offical Dildobin Telegram
  </div>
</div>

<!-- Нижняя панель поиска -->
<div id="bottomPanel">
  <input type="text" placeholder="Введите имя или юзернейм" id="searchQuery" />
  <button id="searchButton">Search</button>
</div>

<!-- Результаты поиска -->
<div id="resultsContainer"></div>

<script>
  const topBtn = document.getElementById('topButton');
  const addForm = document.getElementById('addForm');
  const addBtn = document.getElementById('addTextBtn');
  const searchBtn = document.getElementById('searchButton');
  const resultsContainer = document.getElementById('resultsContainer');

  // Переключение формы добавления
  topBtn.onclick = () => {
    addForm.style.display = addForm.style.display === 'none' || addForm.style.display === '' ? 'block' : 'none';
  };

  // Добавление нового юзернейма
  addBtn.onclick = () => {
    const newText = document.getElementById('newTextInput').value.trim();
    if (newText) {
      fetch('/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newText })
      }).then(res => res.json())
        .then(data => {
          alert(data.message);
          document.getElementById('newTextInput').value = '';
          addForm.style.display = 'none';
        });
    }
  };

  // Поиск по имени или юзернейму
  document.getElementById('searchButton').onclick = () => {
    const query = document.getElementById('searchQuery').value.trim();
    fetch('/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    }).then(res => res.json())
      .then(data => {
        resultsContainer.innerHTML = '';
        if (data.matches.length > 0) {
          data.matches.forEach(item => {
            resultsContainer.innerHTML += `<div>${item}</div>`;
          });
        } else {
          resultsContainer.innerHTML = '<div>Совпадений не найдено</div>';
        }
      });
  };
</script>

</body>
</html>
