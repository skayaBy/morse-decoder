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
  let message = '';   
  let sliceArr = [];

  for (let i = 0; i < expr.length; i=i+10) {
    sliceArr.push(expr.slice(i, i+10));
  }

  const replaceArr = sliceArr.map(function(element) {
    return element.replace(/10/g, ".")
    .replace(/11/g, "-")
    .replace(/0/g, "")
    .replace(/\*{10}/g, " ");
  });

  message = replaceArr.map (function(element) {
    if(element != " ") element = MORSE_TABLE[element];
    return element; 
    })
    .join('');

  return message;
}

module.exports = {
    decode
}
