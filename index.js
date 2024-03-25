const express = require('express')
const app = express();

app.listen(3000, () => console.log(`
    -----------------------------
    -----------------------------
    ------ BACKEND RODANDO ------
    -----------------------------
    -----------------------------
`))



// Metódos são use, all (pra todos os verbos do http) e get/put/etc para especificos
app.get('/home', (req, res) => {
    // res.send('Estou <b>rodando!</b>')

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

    // res.json([
    //     {id: 7, name: 'Bia', position: 1},
    //     {id: 34, name: 'Ana', position: 2},
    //     {id: 47, name: 'Carlos', position: 3}
    // ])

    // res.json({
    //     name: 'iPad 32GB',
    //     price: 1899.00,
    //     discount: 0.12
    // })
})


//Middleware function
app.use('/home', (req, res) => {
    res.send('Caiu no middleware')
    console.log('Caiu no middleware! ')
})
