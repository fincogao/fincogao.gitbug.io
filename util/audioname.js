const srcPath = '../public/andio'
const tarpath = '../constant/audionames'
const fs = require('fs')

var data = 'var audionames = ['
const files = fs.readdirSync(srcPath);
for (let i = 0; i < files.length; i++) {
    let file = files[i];
    file = file.split('.')[0]
    data += '"' + file + '",'
}
data += ']'

fs.writeFileSync(tarpath, data);