let sentence = "JavaScript is the Programming Language for the Web."

function findLongestWord(str) {

    let words = str.split(" ")
    let longestWord = ""

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]
        }
    }

    return longestWord

}

let longest = findLongestWord(sentence)

console.log(longest);