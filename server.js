import Express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = new Express();

app.use(cors());
app.use(bodyParser.json());
app.post('/login', (req, res) => {
  const credentials = req.body;
  console.log(credentials);
  if (!credentials.login || !credentials.password) {
    return res.status(404).json({Auth: 'Denied'});
  } else {
    return res.status(200).json({
      Auth: 'Logged',
      Language: 'EN'
    });
  }

});

app.listen(8080, () => console.log('Listening on http://localhost:8080'));