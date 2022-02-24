const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // console.log(expr)
    let clean =[];
    let splitted = splitToDozens(expr).forEach((str) => {
        let arr = str.split('');
        while (arr[0] === '0') {
            arr = arr.slice(1);  
        }
        clean.push(arr.join(''))
    })
    console.log (clean)
    splitToPairs(clean)
    console.log(MORSE_TABLE['-...'])
}

module.exports = {
    decode
}

function splitToDozens (str) {
    let result = [];
    for (let i = 0; i < str.length / 10; i++) {
        result[i] = str.slice( 10 * i, 10 * (i + 1));
    }
    return result;
}

function splitToPairs (str) {
    let result = [];
    for (let i = 0; i < str.length / 2; i++) {
        result[i] = str.slice( 2 * i, 2 * (i + 1));
    }
    return result;
}

function removeZeroes (str) {
    let arr = str.split('');
    console.log(arr[0])
    while (arr[0] === '0') {
        arr = arr.slice(1);  
    }
    console.log(arr)
}