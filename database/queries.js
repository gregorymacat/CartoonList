const {Client} = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'gzmacat',
  database: 'cartoonlist',
  password: 'password',
  port: '5432'
});

client.connect()
  .then(() => console.log('Connected to database'))
  .catch(err => {
    client.release();
    console.log('Unable to conenct ', err.stack);
  })


exports.module = {
  saveData: (username, showData, reviewData) => {
    var queryOne = client.query("INSERT INTO users (username) VALUES ($1::text)", [username]);
    var queryTwo = client.query("INSERT INTO shows (username) VALUES ($1::text)", [username]);
    var queryThree = client.query("INSERT INTO users (username) VALUES ($1::text)", [username])
  }
}
