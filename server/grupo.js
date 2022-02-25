
const grupo1 = {
    "id": 1,
    "total": 0,
    "participantes": [
        { "nombre": "Barreiro Martin", "gasto": 300 },
        { "nombre": "Barreiro Federico", "gasto": 200 },
        { "nombre": "Gimenez Martias", "gasto": 400 }
    ],
}

grupo1.participantes.map((v) => {
    grupo1.total += v.gasto
})

console.log(grupo1.total)


