<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IPHUB</title>
  <style>
    body {
      font-family: sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background-color: #f0f0f0;
    }
    #ip-input {
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-bottom: 10px;
    }
    #lookup-button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    #result {
      margin-top: 20px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 400px;
      text-align: left;
      background-color: white;
    }
  </style>
</head>
<body>

  <h1>IPHUB</h1>

  <input type="text" id="ip-input" placeholder="Введите IP">
  <button id="lookup-button">Lookup</button>

  <div id="result">
    <!-- Здесь будут результаты -->
  </div>

  <script>
    document.getElementById('lookup-button').addEventListener('click', () => {
      const ip = document.getElementById('ip-input').value;
      if (ip) {
        lookupIP(ip);
      } else {
        document.getElementById('result').textContent = 'Пожалуйста, введите IP.';
      }
    });

    async function lookupIP(ip) {
      try {
        const response = await fetch(`https://ipapi.co/${ip}/json/`); // Замени ip-api.com на ipapi.co, если у тебя проблемы с CORS
        const data = await response.json();

        if (data.error) {
          document.getElementById('result').textContent = `Ошибка: ${data.reason}`;
        } else {
          const resultHTML = `
            Ip        : ${data.ip}<br>
            City      : ${data.city}<br>
            Region    : ${data.region}<br>
            Country   : ${data.country_name} (${data.country_code})<br>
            Latitude  : ${data.latitude}<br>
            Longitude : ${data.longitude}<br>
            Timezone  : ${data.timezone}<br>
            Isp       : ${data.org}<br>
            <a href="https://www.google.com/maps/search/?api=1&query=${data.latitude},${data.longitude}" target="_blank">Открыть карту</a>
          `;
          document.getElementById('result').innerHTML = resultHTML;
        }
      } catch (error) {
        document.getElementById('result').textContent = `Произошла ошибка: ${error}`;
      }
    }
  </script>

</body>
</html>
