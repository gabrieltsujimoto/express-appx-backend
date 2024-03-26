function save(req, res){
    res.send('Usuário > Salvar')
}

function getUser(req,res){
    res.send('Usuario > Obter')
}

module.exports = { save, getUser }