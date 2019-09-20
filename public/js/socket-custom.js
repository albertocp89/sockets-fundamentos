var socket = io();

//Escuchar información del back
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

//Escuchar información del back
socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});

//Enviar información del front al back
socket.emit('enviarMensaje', {
    usuario: 'Alberto',
    mensaje: 'Hola mundo'
}, function ( resp ) {
    console.log('Respuesta del server: ',resp);
});

//Escuchar al back
socket.on('enviarMensaje', (mensaje) => {
    console.log(mensaje);
});