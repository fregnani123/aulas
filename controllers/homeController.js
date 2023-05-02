

exports.paginaInicial = (req, res) => {
    res.send(`<form action="/" method="POST">Assunto Postado:<input type="text"><button>Enviar</button></form>`)
};

exports.postAcionado = (req, res) => {
    res.send("novo post")
}

exports.parametros = (req, res) => { 
    res.send(req.params)
}