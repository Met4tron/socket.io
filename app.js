/*Configurações do servidor*/
var app = require('./config/server');

var server = app.listen(3000, function(){
  console.log("Servidor Rodando");
});

var io = require('socket.io').listen(server);

app.set('io', io);
/* Abrindo Conexão */

io.on('connection', function(socket){
  console.log('Usuário Conectado');
  socket.on('disconnect', function(){
    console.log('Usuario Desconectou');
  });
});
