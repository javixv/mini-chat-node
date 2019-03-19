const { io } = require('../server');
const {Usuarios} = require('../classes/usuarios');

const usuarios = new Usuarios();

io.on('connect', ( client) => {
   
    client.on('entrarChat', (data, callback) => {

        if(!data.nombre){
            return callback({
                error : true,
                message : 'el nombre es necesario'
            })
        }


        let persona = usuarios.agregarPersona(client.id, data.nombre);
        
        
        callback(
            persona
        )
    })
})