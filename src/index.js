module.exports = function toReadable(number) {
    let ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let teen = { 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen' }

    let transformToString = String(number)

    if (transformToString.length === 3) {
        if (transformToString[1] > 1 && transformToString[2] > 0) {
            return `${ones[transformToString[0] - 1]} hundred ${tens[transformToString[1] - 2]} ${ones[transformToString[2] - 1]}`
        }
        if (transformToString[1] == 1) {
            let ten = transformToString[1] + transformToString[2]
            for (key in teen) {
                if (ten == key) {
                    ten = teen[key]
                }
            }
            return `${ones[transformToString[0] - 1]} hundred ${ten}`
        }
        if (transformToString[1] > 1 && transformToString[2] == 0) {
            return `${ones[transformToString[0] - 1]} hundred ${tens[transformToString[1] - 2]}`
        }
        if (transformToString[1] == 0 && transformToString[2] > 0) {
            return `${ones[transformToString[0] - 1]} hundred ${ones[transformToString[2] - 1]}`
        }
        if (transformToString[1] == 0 && transformToString[2] == 0) {
            return `${ones[transformToString[0] - 1]} hundred`
        }
    }

    if (transformToString.length === 2) {
        if (transformToString[0] > 1 && transformToString[1] > 0) {
            return `${tens[transformToString[0] - 2]} ${ones[transformToString[1] - 1]}`
        }
        if (transformToString[0] > 1 && transformToString[1] == 0) {
            return `${tens[transformToString[0] - 2]}`
        }
        if (transformToString[0] == 1) {
            let ten = transformToString[0] + transformToString[1]
            for (key in teen) {
                if (ten == key) {
                    ten = teen[key]
                }
            }
            return `${ten}`
        }
    }

    if (transformToString.length === 1 && transformToString != 0) {
        return `${ones[transformToString[0] - 1]}`
    }

    if (transformToString == 0) {
        return `zero`
    }
}