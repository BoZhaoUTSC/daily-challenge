/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const height = board.length
    const width = board[0].length

    const searchWord = (i, j, word, prevCharDirection) => {
        console.log({i, j, word, prevCharDirection})
        // out of range
        if (i < 0 || i >= height || j < 0 || j >= width) {
            return false
        }
        // foudn the word
        if (word === "") {
            return true
        }
        // wrong character
        if (board[i][j] !== word[0]) {
            return false
        }
        
        const remaining = word.slice(1, word.length)
        return (searchWord(i, j + 1, remaining, "east") && prevCharDirection !== "east") ||
            (searchWord(i + 1, j, remaining, "south") && prevCharDirection !== "south") ||
            (searchWord(i, j - 1, remaining, "west") && prevCharDirection !== "west") ||
            (searchWord(i - 1, j, remaining, "north") && prevCharDirection !== "north")
    }


    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (board[i][j] === word[0]) {
                const result = searchWord(i, j, word)
                console.log("result", result)
                if (result) {
                    return true
                }
            }
        }
    }
    return false
};



const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]

console.log(exist(board, "ABCCED"))
