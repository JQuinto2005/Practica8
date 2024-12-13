/*var pgp = require("pg-promise");
var db = pgp("postgres://postgres:1234@localhost:5432/database/empresa");

db.one("SELECT * FROM public.'Empresa'")
    .then(function (data) {
        console.log("DATA:", data.value);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    })*/






const { Client } = require('pg')

const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'empresa',
    password: '1234',
    port: 5432,
  }
  const client = new Client(connectionData)

  client.connect()
client.query('SELECT nombre FROM public."Empleados"')
    .then(response => {
        console.log(response.rows)
        client.end()
    })
    .catch(err => {
        client.end()
    })