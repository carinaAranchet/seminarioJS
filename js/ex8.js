const dia1 = new Date()
const dia2 = new Date(575978300000)

function imprimirFecha(unaFecha){
    console.log("Fecha: " + unaFecha.toLocaleDateString() + " Hora: " + unaFecha.toLocaleTimeString())
}

console.log("Fechas al momento de crear las constantes:")
imprimirFecha(dia1)
imprimirFecha(dia2)

function intercambiarFecha(dia1, dia2){
    dia2.setFullYear(dia1.getFullYear())
    dia1.setMonth(dia2.getMonth())
    imprimirFecha(dia1)
    imprimirFecha(dia2)
}
console.log("Fechas modificadas:")
intercambiarFecha(dia1,dia2)

function restaDeFechas(dia1,dia2){
    let total = dia1.getTime() - dia2.getTime()
    return total
}
console.log((restaDeFechas(dia1, dia2)/(1000*60*60*24)).toFixed(2) + " dias")
