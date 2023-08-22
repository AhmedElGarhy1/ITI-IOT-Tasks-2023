function swapCases(input) {
    return input.split('').map((char) => {
        return char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase()
    }).join("")
}

function capitalize(input) {
    return input.split(" ").map((word) => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ")
}

function longestWord(input) {
    let longestWord = "";
    input.split(" ").forEach((word) => {
        if (word.length > longestWord.length) longestWord = word;
    })
    return longestWord
}