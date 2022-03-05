const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors")
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Test');
}
main()

////CONSTRUYENDO PERSONA//////// 

const personaSchema = new mongoose.Schema({
    name: String,
    nacionalidad: String,
    edad: Number,
}, { versionKey: false });

const Persona = mongoose.model('Persona', personaSchema);

// const fede = new Persona({ name: 'fede', nacionalidad: "Aleman", edad: 23 });
// const martin = new Persona({ name: 'martin', nacionalidad: "Argentino", edad: 33 });

const crear = async (nombre, nacionalidad, edad) => {
    const personas = await Persona.find()
    var arry = personas.filter(e => e.name == nombre)
    if (arry.length === 0) {
        let nuevaPersona = new Persona({ name: nombre, nacionalidad: nacionalidad, edad: edad });
        nuevaPersona.save()
    } else {
        console.log("existe")
    }
}
//MOSTRANDO DATOS EN LA BASE DE DATOS//

const mostrar = async () => {
    var arry = []
    const personas = await Persona.find()
    personas.map((v) => arry.push(v))

    console.log(arry)
}

//MODIFICANDO USUARIO//

const modificar = async (id) => {
    await Persona.updateOne({ _id: id },
        {
            $set: {
                name: "juan",
                edad: 40
            }
        })
}

//ELIMINAR DATOS //

const eliminar = async (id) => {
    await Persona.deleteOne({ _id: id })

}
// crear("belu", "argentina", 31)
// crear("jochi", "peruano", 35)
// modificar("6217d7f2a2e44cb9da901112")
// eliminar("6217d7f2a2e44cb9da901112")
// mostrar()




////////////Grupo objeto//////////////////

const grupoSchema = new mongoose.Schema({
    id: Number,
    nombreGrupo: String,
    total: Number,
    integrantes: Array
}, { versionKey: false });

const Grupo = mongoose.model('Grupo', grupoSchema);


const crearGrupo = async (id, nombreGrupo, integrantes) => {
    let grupo = new Grupo({ id: id, nombreGrupo: nombreGrupo, total: 0, integrantes: integrantes });
    grupo.save()
}

const mostrarGrupos = async () => {
    const Grupos = await Grupo.find()

    console.log(Grupos)
}

const modificarGasto = async (idGrupo, nombre, gasto) => {
    const Grupos = await Grupo.find()
    var suma2;
    var suma = Grupos[0].integrantes
    suma.map((v) => {
        if (v.nombre == nombre) {
            suma2 = parseInt(v.gastos)
        }
    })
    
    await Grupo.updateOne(
        { _id: idGrupo, "integrantes.nombre": nombre },
        {
            $set: {
                "integrantes.$.gastos": suma2 + parseInt(gasto)
            }
        }
    )
}

// mostrarGrupos()
 //modificarGasto("62193d48ef5e3d97dfc4b56f", 1, 7000)  // (idgrupo,nombreUser,gasto)
// crearGrupo(3, "paraguay", [
//     {
//         "id": 1,
//         "nombre": "jasinta",
//         "gastos": 300
//     },
//     {
//         "id": 2,
//         "nombre": "vero",
//         "gastos": 300
//     },
//     {
//         "id": 1,
//         "nombre": "carlitos",
//         "gastos": 300
//     }
// ])

app.post('/registrar', async (req, res) => {
    var gasto = req.body.dinero
    var asunto = req.body.asunto
    var nombre = req.body.nombre
    console.log(`(Gasto: $${gasto}) (Asunto: ${asunto})  (Name: ${nombre})`)
    modificarGasto("62193d48ef5e3d97dfc4b56f", nombre, gasto)


})
app.get('/api', (req, res) => {
    const data = { "name": "martin", "edad": 22 }
    res.json(data)
    res.send(JSON.stringify(data))

})
//strarting
app.listen(3001, () => {
    console.log(`Server On Port  ${3001} `)
});