const text = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." 
function log(message) {
    console.log(message);
    }

function ejercicio6(text){
     console.log("El texto de 5 palabras tiene " + text.length + " caracteres.")
}
function posicionIpsum(text){
    let pos = text.search('ipsum')
    if(pos != -1){
        console.log("La palabra ipsum comienza en la posición " + pos)
    }else{
        console.log("La palabra no esta.")
    }
}

function mayuscula(text){
    let substr = text.slice(1,4)
    log(substr.toUpperCase())
}
      
log(text)
ejercicio6(text)
posicionIpsum(text)
mayuscula(text)
