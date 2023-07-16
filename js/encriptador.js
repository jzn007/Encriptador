var dictionary = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

var mensajeDesencriptado = "felicidades por enfrentar este desafio y haberlo concluido con exito!";
var mensajeEncriptado = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";

const encrypt = (message) =>{
    for(const [key, value] of Object.entries(dictionary)){
        message = message.replaceAll(key, value);
    }
    return message;
};


const decrypt = (message) => {
    for(const [key, value] of Object.entries(dictionary)){
        message = message.replaceAll(value, key);
    }
    return message;
}


// function encriptarMensaje(mensaje){
//     for(const [key, value] of Object.entries(dictionary)){
//         mensaje = mensaje.replaceAll(key, value);
//     }
//     return mensaje;
// }

// function desencriptarMensaje(mensaje){
//     for(const [key, value] of Object.entries(dictionary)){
//         mensaje = mensaje.replaceAll(value, key);
//     }
        
//     return mensaje;
// }

const main = () => {
    mensajeD = decrypt(mensajeEncriptado);
    console.log(mensajeD);
    mensajeE = encrypt(mensajeDesencriptado);
    console.log(mensajeE);
    checar = decrypt(mensajeE);
    if(mensajeE === mensajeEncriptado)
        console.log("Si son iguales");
    else
        console.log("No son iguales");
}

main();