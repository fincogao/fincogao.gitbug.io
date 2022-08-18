const srcPath = '../public/avatar'
const tarpath = '../constant/avatarnames.js'
const fs = require('fs')

var data = 'var avatarnames = ['
const files = fs.readdirSync(srcPath);
for (let i = 0; i < files.length; i++) {
    let file = files[i];
    data += '"' + file + '",'
}
data += ']'

fs.writeFileSync(tarpath, data);