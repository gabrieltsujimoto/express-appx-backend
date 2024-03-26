const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const saudacao = require('./greetingsMid')

const userAPI = require('./api/user');

require('./api/produto')(app, 'com Param!')

//Middleware em módulos criados, forma padrão
app.post('/usuario', userAPI.save);
app.get('/usuario', userAPI.getUser);

/*  Tratamento do body das requisições utilizando a biblioteca body-parser
    cada um deles é responsável por tratar os dados de acordo com o formato textual
    pode ser em texto, JSON e até URLEnconded (quando os dados da requisição vão direto pelo header da mesma. )

*/
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, () => console.log(`
    -----------------------------
    -----------------------------
    ------ BACKEND RODANDO ------
    -----------------------------
    -----------------------------
`))

app.use(saudacao('Gabriel'))

//Middleware function, sem caminho especificado todas as requisições passarão por aqui. 
app.use((req, res, next) => {
    console.log('Antes do get')
    next()
})

//parametros via query
app.get('/clientes/relatorio', (req,res) =>{
    res.send(`Cliente relatório: comepleto ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/body', (req,res)=>{
    // let body = ''
    // req.on('data', function(parte){
    //     body += parte
    // })

    // req.on('end', function(){
    //     res.send(body);
    // })

    res.send(req.body)
})

//parametros dentro da URl
app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente de id: ${req.params.id}`)
})


// Metódos são use, all (pra todos os verbos do http) e get/put/etc para especificos
app.get('/home', (req, res) => {
    // res.send('Estou <b>rodando!</b>')
    console.log('Durante o get')
    res.json({
        data: [
            { "id": 1, "name": "Pessoa 1", "position": "Cargo 1" },
            { "id": 2, "name": "Pessoa 2", "position": "Cargo 2" },
            { "id": 3, "name": "Pessoa 3", "position": "Cargo 3" },
            { "id": 4, "name": "Pessoa 4", "position": "Cargo 4" },
            { "id": 5, "name": "Pessoa 5", "position": "Cargo 5" },
            { "id": 6, "name": "Pessoa 6", "position": "Cargo 6" },
            { "id": 7, "name": "Pessoa 7", "position": "Cargo 7" },
            { "id": 8, "name": "Pessoa 8", "position": "Cargo 8" },
            { "id": 9, "name": "Pessoa 9", "position": "Cargo 9" },
            { "id": 10, "name": "Pessoa 10", "position": "Cargo 10" },
            { "id": 11, "name": "Pessoa 11", "position": "Cargo 11" },
            { "id": 12, "name": "Pessoa 12", "position": "Cargo 12" },
            { "id": 13, "name": "Pessoa 13", "position": "Cargo 13" },
            { "id": 14, "name": "Pessoa 14", "position": "Cargo 14" },
            { "id": 15, "name": "Pessoa 15", "position": "Cargo 15" },
            { "id": 16, "name": "Pessoa 16", "position": "Cargo 16" },
            { "id": 17, "name": "Pessoa 17", "position": "Cargo 17" },
            { "id": 18, "name": "Pessoa 18", "position": "Cargo 18" },
            { "id": 19, "name": "Pessoa 19", "position": "Cargo 19" },
            { "id": 20, "name": "Pessoa 20", "position": "Cargo 20" },
            { "id": 21, "name": "Pessoa 21", "position": "Cargo 21" },
            { "id": 22, "name": "Pessoa 22", "position": "Cargo 22" },
            { "id": 23, "name": "Pessoa 23", "position": "Cargo 23" },
            { "id": 24, "name": "Pessoa 24", "position": "Cargo 24" },
            { "id": 25, "name": "Pessoa 25", "position": "Cargo 25" },
            { "id": 26, "name": "Pessoa 26", "position": "Cargo 26" },
            { "id": 27, "name": "Pessoa 27", "position": "Cargo 27" },
            { "id": 28, "name": "Pessoa 28", "position": "Cargo 28" },
            { "id": 29, "name": "Pessoa 29", "position": "Cargo 29" },
            { "id": 30, "name": "Pessoa 30", "position": "Cargo 30" },
            { "id": 31, "name": "Pessoa 31", "position": "Cargo 31" },
            { "id": 32, "name": "Pessoa 32", "position": "Cargo 32" },
            { "id": 33, "name": "Pessoa 33", "position": "Cargo 33" },
            { "id": 34, "name": "Pessoa 34", "position": "Cargo 34" },
            { "id": 35, "name": "Pessoa 35", "position": "Cargo 35" },
            { "id": 36, "name": "Pessoa 36", "position": "Cargo 36" },
            { "id": 37, "name": "Pessoa 37", "position": "Cargo 37" },
            { "id": 38, "name": "Pessoa 38", "position": "Cargo 38" },
            { "id": 39, "name": "Pessoa 39", "position": "Cargo 39" },
            { "id": 40, "name": "Pessoa 40", "position": "Cargo 40" },
            { "id": 41, "name": "Pessoa 41", "position": "Cargo 41" },
            { "id": 42, "name": "Pessoa 42", "position": "Cargo 42" },
            { "id": 43, "name": "Pessoa 43", "position": "Cargo 43" },
            { "id": 44, "name": "Pessoa 44", "position": "Cargo 44" },
            { "id": 45, "name": "Pessoa 45", "position": "Cargo 45" },
            { "id": 46, "name": "Pessoa 46", "position": "Cargo 46" },
            { "id": 47, "name": "Pessoa 47", "position": "Cargo 47" },
            { "id": 48, "name": "Pessoa 48", "position": "Cargo 48" },
            { "id": 49, "name": "Pessoa 49", "position": "Cargo 49" },
            { "id": 50, "name": "Pessoa 50", "position": "Cargo 50" },
            { "id": 51, "name": "Pessoa 51", "position": "Cargo 51" },
            { "id": 52, "name": "Pessoa 52", "position": "Cargo 52" },
            { "id": 53, "name": "Pessoa 53", "position": "Cargo 53" },
            { "id": 54, "name": "Pessoa 54", "position": "Cargo 54" },
            { "id": 55, "name": "Pessoa 55", "position": "Cargo 55" },
            { "id": 56, "name": "Pessoa 56", "position": "Cargo 56" },
            { "id": 57, "name": "Pessoa 57", "position": "Cargo 57" },
            { "id": 58, "name": "Pessoa 58", "position": "Cargo 58" },
            { "id": 59, "name": "Pessoa 59", "position": "Cargo 59" },
            { "id": 60, "name": "Pessoa 60", "position": "Cargo 60" },
            { "id": 61, "name": "Pessoa 61", "position": "Cargo 61" },
            { "id": 62, "name": "Pessoa 62", "position": "Cargo 62" }
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })



    /* res.json([
    //     {id: 7, name: 'Bia', position: 1},
    //     {id: 34, name: 'Ana', position: 2},
    //     {id: 47, name: 'Carlos', position: 3}
    // ])

    // res.json({
    //     name: 'iPad 32GB',
    //     price: 1899.00,
    //     discount: 0.12
    // })*/
})

//Middleware function
app.use('/home', (req, res) => {
    console.log('Depois do get')
})

