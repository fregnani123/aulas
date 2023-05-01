exports.paginaInicial = (req, res) => {
    res.send(`<form method="POST"> Nome do cliente: <input type="text" name="nome"><button>Olá Mundo</button></form>`);
};

exports.trataPost = (req, res) => {
    res.send('Sou sua nova rota de POST')
}
