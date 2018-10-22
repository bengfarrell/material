const fs = require('fs');
const path = require('path');
const glob = require('glob');


const filepattern = process.argv[2]; //**/*.js
glob(filepattern, function (er, files) {
    for (let c = 0; c < files.length; c++) {
        let css = fs.readFileSync(files[c], 'utf8').trim();
        css = `export default { 
    css() {
        return \`
${css}\`;
    }
}`;

        const file = path.parse(files[c]);
        fs.writeFileSync(file.dir + path.sep + file.name + '.js', css);
    }
});
