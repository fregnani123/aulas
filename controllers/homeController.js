exports.paginaInicial = (req, res) => {
    res.send(`<form method="POST"> Nome do cliente: <input type="text" name="nome"><button>Olá Mundo</button></form>`);
};