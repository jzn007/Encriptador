var dictionary = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

var mensajeDesencriptado = "felicidades por enfrentar este desafio y haberlo concluido con exito!";
var mensajeEncriptado = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";

const encryptMessage = (message) =>{
    for(const [key, value] of Object.entries(dictionary)){
        message = message.replaceAll(key, value);
    }
    return message;
};


const decryptMessage = (message) => {
    for(const [key, value] of Object.entries(dictionary)){
        message = message.replaceAll(value, key);
    }
    return message;
}

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

const hideMessageNotFoud = (hide) => {
    let textAreaResult = document.getElementsByClassName("textarea-result")[0];
    let labelNotfoundResult = document.getElementsByClassName("label-notfound-result")[0];
    let labelIngresatextoResult = document.getElementsByClassName("label-ingresatexto-result")[0];
    let buttonCopyResult = document.getElementsByClassName("buttonCopy-result")[0];

    textAreaResult.style.backgroundImage = hide ? "none" : "url('/img/muneco.png')";
    labelNotfoundResult.style.visibility = hide ? "hidden" : "visible";
    labelIngresatextoResult.style.visibility = hide ? "hidden" : "visible";
    buttonCopyResult.style.visibility = hide ? "visible" : "hidden";
}

const copyMessageResultToClipboard = () => {
    navigator.clipboard.write("");
}

const encrypt = (yes) => {
    let textAreaProcess = document.getElementsByClassName("textarea-process")[0];
    let textAreaResult = document.getElementsByClassName("textarea-result")[0];
    debugger;
    if(textAreaProcess.value.length === 0){
        alert("Debes escribir un mensaje para " + (yes ? "Encriptar" : "Desencriptar"));
        hideMessageNotFoud(false);
    } else {
        hideMessageNotFoud(true);
        textAreaResult.value = yes ? encryptMessage(textAreaProcess.value) : decryptMessage(textAreaProcess.value);
        textAreaProcess.value="";
    }
}


const copy = () => {
    let textAreaProcess = document.getElementsByClassName("textarea-process")[0];
    let textAreaResult = document.getElementsByClassName("textarea-result")[0];

    textAreaProcess.value =textAreaResult.value;
    hideMessageNotFoud(false);
    textAreaResult.value="";
}
// const decrypt = () => {
//     debugger;
//     let textAreaProcess = document.getElementsByClassName("textarea-process")[0];
//     let textAreaResult = document.getElementsByClassName("textarea-result")[0];
    
//     if(textAreaProcess.value.length === 0){
//         alert("Debes escribir un mensaje");
//         hideMessageNotFoud(true);
//     } else {
//         textAreaResult.value = encryptMessage(textAreaProcess.value);
//         hideMessageNotFoud(true);
//     }
// }


hideMessageNotFoud(false);
//main();