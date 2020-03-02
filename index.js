var fs = require('hexo-fs');

let config = Object.assign({destination: 'main', path: 'themes/landscape/source/css/', files: 'styles', minify: true}, hexo.config.css_merge);
let fileNames = Object.assign({}, config.files);

var allcontent = '';
var contents = [];

for (var i in fileNames)
{
    contents[i] = config.path + fileNames[i] + '.css';
}

for (i = 0; i < contents.length; i++) {
    allcontent = allcontent + fs.readFileSync(contents[i]) + ' ';
}

if (config.minify) {
    var CleanCSS = require('clean-css');
    var input = allcontent;
    var options = {  };
    var output = new CleanCSS(options).minify(input);
}


hexo.extend.generator.register('css-merge', function (locals) {

    return {

        path: '/css/' + config.destination + '.css',
        data: function(){
            if (config.minify) {
                return output.styles;
            }
            else {
                return allcontent;
            }
        }

    };

});
