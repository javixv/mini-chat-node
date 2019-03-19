var socket = io();

//para leer parametros
var params = new URLSearchParams(window.location.search)


if(!params.has('nombre')){
    // Redireccionando a Index
    window.location = 'index.html'

    throw new Error('El nombre es necesario')
}

var Users = {
    nombre : params.get('nombre')
}
 

        socket.on('connect', function(){
            console.log('conectado al servidr')

            socket.emit('entrarChat', Users, function(resp){
                console.log('usuarios : ', resp)
            });
        });

        // los eventos on son para escuchar eventos
        socket.on('disconnect', function (){
            console.log('conexion perdida con el servidor')
        })

        //Enviar informacion
        socket.emit('enviarMsj', {
            nombre : 'javier',
            message : 'hola mundo'
        }, function(resp){
            console.log('server: ', resp)
        })

        //Escuchar informacion
        socket.on('enviarMsj', function(mensaje){
            console.log('servidor : ', mensaje)
        })