function trim(){
    let word= "      Hi World  "
    console.log(word.trim());
}

function toLowerCase(){
    let sentence= " hI MY NaMe Is JAYden"
    console.log(sentence.toLowerCase());
}

function toUpperCase(){
    let line= "hI MY NaMe Is JAYden"
    console.log(line.toUpperCase());
}

module.exports.tr= trim
module.exports.lC= toLowerCase
module.exports.uC= toUpperCase