const srcPath = 'C:/Users/fangchaogao/Desktop/ikun/public/emoj/'
const fs = require('fs')

const files = fs.readdirSync(srcPath);
for (let i = 0; i < files.length; i++) {
    let file = files[i];
    var suffix = file.split('.')[file.split('.').length - 1]
    fs.rename(srcPath + file, srcPath + 'emoj' + i + '.' + suffix, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log(file)
        }
    })
}
