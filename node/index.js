const express = require("express")
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const createTableSQL = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    )
`;

connection.query(createTableSQL, function (error, results, fields) {
    if (error) throw error;
    console.log('Table created successfully');
});

const sql = `INSERT INTO users(name) VALUES('matheus123')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})