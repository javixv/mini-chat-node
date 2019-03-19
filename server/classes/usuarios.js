
class Usuarios{

    constructor(){
        this.personas = [];
    }


    agregarPersona(id, nombre){

        let persona = {id,nombre};

        this.personas.push(persona);


        return this.personas;

    }


    getPersona(id){
        let persona = this.personas.filter(p => {
            return p.id === id
        })[0]

        return persona;
    }

    getAllPerosnas(){
        return this.personas
    }

    getPerosnasPorSala(){

    }

    deletePersona(id){

        let personaBarrada = getPersona(id)

        this.personas = this.personas.filter(p => {
            return p.id != id;
        })

        return personaBarrada

    }


}


module.exports = {
    Usuarios
}