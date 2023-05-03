

exports.paginaInicial = (req, res) => {
    res.render(`index`);
};

exports.postAcionado = (req, res) => {
    res.send("novo post")
};

exports.parametros = (req, res) => { 
    res.send(req.params)
};