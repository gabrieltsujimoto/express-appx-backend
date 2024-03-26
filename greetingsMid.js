function saudacao(nome) {
    return function (req, res, next) {
        setTimeout(() => {
            console.log(`Seja bem-vindo ${nome}!`)
        }, 1000)
        console.clear();
        next()
    }
}

module.exports = saudacao