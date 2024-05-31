let number = 123421

function palindromeNumber(x) {
    if (x === 0) {
        return true
    }

    if (x < 0 || x % 10 == 0) {
        return false
    }

    let reversed_int = 0

    while (x > reversed_int) {
        let pop = x % 10
        x = Math.floor(x / 10)
        reversed_int = (reversed_int * 10) + pop

    }
    if (x == reversed_int || x == Math.floor((reversed_int / 10))) {
        return true
    }
    else {

        return false
    }
}

console.log(palindromeNumber(number))