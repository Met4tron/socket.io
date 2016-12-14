module.exports.iniciaChat = function(application, req, res) {

    var dadosForm = req.body;

    req.assert('apelido', 'Apelido é Obrigatório').notEmpty();
    req.assert('apelido', 'Apelido deve conter entre 3 e 15 caracteres').len(3, 15);

    var erros = req.validationErrors();

    if (erros) {
        res.render('index', {
            validacao: erros
        });
    }

  application.get('io').emit(
    'msgCliente',
    {
      apelido: dadosForm.apelido,
      mensagem: ' entrou no chat'

    }
  );
    res.render("chat");
}
