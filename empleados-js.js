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
        document.getElementById("tabla").innerHTML="<ul>"+response.rows+"</ul>"
        client.end()
    })
    .catch(err => {
        client.end()
    })