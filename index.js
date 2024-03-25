const express = require('express')
const app = express();

//Middleware function
app.use('/home', (req, res, next) => {
    res.send('Antes do get')
    next()
})

// Metódos são use, all (pra todos os verbos do http) e get/put/etc para especificos
app.get('/home', (req, res, next) => {
    // res.send('Estou <b>rodando!</b>')
    console.log('Durante o get...')
    res.json({
        data: [
            { id: 7, name: 'Bia', position: 1 },
            { id: 34, name: 'Ana', position: 2 },
            { id: 47, name: 'Carlos', position: 3 }
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

    next()

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
app.use('/home', (req, res, next) => {
    res.send('Depois do get')
    next()
})

app.listen(3000, () => console.log(`
    -----------------------------
    -----------------------------
    ------ BACKEND RODANDO ------
    -----------------------------
    -----------------------------
`))
