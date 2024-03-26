module.exports = (app, text) => {
    function save(req, res) {
        res.send('Produto > Salvar: ' + text)
    }

    function obter(req, res) {
        res.send('Produto > Obter: ' + text)
    }

    app.post('/produto', save)
    app.get('/produto', obter)

    return { save, obter }
} 