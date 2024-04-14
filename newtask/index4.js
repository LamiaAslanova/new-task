let sentence = "javaScript is the programming language for the web."

function capitalizeFirstWord(str) {

    let words = str.split(" ")

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }

    let newSentence = words.join(" ")

    return newSentence

}

let resultSentence = capitalizeFirstWord(sentence)

console.log(resultSentence);