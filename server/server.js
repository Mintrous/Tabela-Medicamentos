const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sqlpass',
    database: 'medicamentos',
    port: '3306'
})

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connection.connect((err) => {
    if(err){
        throw err
    }else{
        console.log('Connected to Database')
    }
})

app.listen(5555, ()=> console.log('Server is running on http://localhost:5555'))


app.get('/', (req,res)=> {
    const sqlGet = "SELECT * FROM medicamentos_table"
    connection.query(sqlGet, (err, result)=> {
        if(err) throw(err)
        res.send(result)
    })
})

app.post('/', (req, res)=> {

    const id = req.body.ean
    const cnpj = req.body.cnpj
    const principio = req.body.principio
    const lab = req.body.laboratorio
    const reg = req.body.registro
    const produto = req.body.produto
    const apresentacao = req.body.apresentacao
    const classe = req.body.classe

    const slqInsert = "INSERT INTO medicamentos_table (id, principio_ativo, cnpj, lab, registro, produto, apresentacao, classe) VALUES (?,?,?,?,?,?,?,?)"

    connection.query(slqInsert, [id, principio, cnpj, lab, reg, produto, apresentacao, classe])

})

app.delete('/:id', (req,res)=> {

    const id = req.params.id
    const sqlDelete = "DELETE FROM medicamentos_table WHERE id = ?"

    connection.query(sqlDelete, id)
})

app.put('/', (req,res)=> {

    const antigoid = req.body.id
    const novoid = req.body.novoid
    const sqlput = "UPDATE medicamentos_table SET id = ? WHERE id = ?"

    connection.query(sqlput, [novoid, antigoid])
})