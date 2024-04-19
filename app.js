const express = require('express');

// Импортируем роутеры
const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games');
const bodyParser = require('body-parser');
const path = require('path') 
const { cors } = require('./middlewares/cors')
const PORT = 3000;
const app = express();
// Сделали всё, что есть на сервере, доступным пользователю
app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRoute,
    gamesRouter
); 
  
app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
}); 