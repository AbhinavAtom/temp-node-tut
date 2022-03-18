// CommonJs, every file is module (by deafault)
// Modules - Encapsulate Code (only share minimun)

const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavour');
require('./07-mind-grenade');

console.log(data);
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);