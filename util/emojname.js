const srcPath = '../public/emoj'
const tarpath = '../constant/emojnames.js'
const fs = require('fs')

var data = 'var emojnames = ['
const files = fs.readdirSync(srcPath);
for (let i = 0; i < files.length; i++) {
    let file = files[i];
    data += '"' + file + '",'
}
data += ']'

fs.writeFileSync(tarpath, data);