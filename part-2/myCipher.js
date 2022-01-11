//will work only for latin alphabet as well as select special characters
const myEncipher = message => {
    const cipherAlpha = "ICARUSBDEFGHJLPQTVWXYZMONK";
    let cipherMessage = "";
    let upperCaseMessage = message.toUpperCase();

    for(let i=0; i < upperCaseMessage.length; i++){

        let char = upperCaseMessage.charAt(i);
        let currentCode = message.toUpperCase().charCodeAt(i);

        if(currentCode >= 32 && currentCode <=64){
            cipherMessage+=char;
        } else if(currentCode >= 65 && currentCode <= 90){
            cipherMessage+=cipherAlpha.charAt(currentCode - 65);
        }
    }
    return cipherMessage;
}

const myDecipher = message => {
    const cipherAlpha = "ICARUSBDEFGHJLPQTVWXYZMONK";
    let cipherMessage = "";
    let upperCaseMessage = message.toUpperCase();

    for(let i=0; i< upperCaseMessage.length; i++){

        let char = upperCaseMessage.charAt(i);
        let currentCode = message.toUpperCase().charCodeAt(i);
        if(currentCode >= 32 && currentCode <=64){
            cipherMessage+=char;
        } else if(currentCode >= 65 && currentCode <= 90){
            let index = cipherAlpha.indexOf(char);
            cipherMessage+=String.fromCharCode(index+65);
        }
    }
    return cipherMessage
}

console.log(myEncipher("I love cryptography!"));
console.log(myDecipher(myEncipher("I love cryptography!")));