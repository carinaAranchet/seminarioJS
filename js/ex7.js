const a = Math.floor(Math.random() * 6)
console.log("El numero A: "+ a)
const b = Math.floor(Math.random() * 6)
console.log("El numero B: "+ b)
const c = Math.floor(Math.random() * 6)
console.log("El numero C: "+ c)

function ejercicio7 (a,b,c){
    console.log("El numero mas grande es: " + Math.max(a,b,c))
    return Math.pow((a+b),c)
}

console.log("Resultado de la operación (A+B)^C= " + ejercicio7(a,b,c))
