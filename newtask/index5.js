let sentence = "JavaScript is the Programming Language for the Web."

function cutCertainPart(str) {

    let words = str.split(" ")

    for (let i = 0; i < words.length; i++) {
        words = words.slice(0, 5)
    }

    let slicedPart = words.join(" ")

    return slicedPart

}

let newSentence = cutCertainPart(sentence)

console.log(newSentence);