const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const exphbs = require('express-handlebars');

app.use(cors());
app.use(express.static('public'));

/*app.get('/', (req, res) => res.send('Hello World!'));

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/signin', (req, res) => {
  const { username, password } = req.body;
  // 클라이언트로부터 전송된 페이로드를 그대로 response한다.
  res.send({ username, password });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));*/

app.engine('handlebars', exphbs({defaultLayout: false}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', {body: 'Hello World'})
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

