//
// Adding hexo-fs
//
var fs = require('hexo-fs');

//
// Taking the objects from the config file
//
let config = Object.assign({destination: 'main', path: 'themes/landscape/source/css/', files: 'styles', minify: true}, hexo.config.css_merge);
let fileNames = Object.assign({}, config.files);

//
// Declaring variables
//
var allcontent = '';
var contents = [];

//
// Getting the data from the CSS files
//
for (var i in fileNames)
{
    contents[i] = config.path + fileNames[i] + '.css';
}

for (i = 0; i < contents.length; i++) {
    allcontent = allcontent + fs.readFileSync(contents[i]) + ' ';
}

//
// CSS minification by the help of CleanCSS
//
if (config.minify) {
    var CleanCSS = require('clean-css');
    var input = allcontent;
    var options = {  };
    var output = new CleanCSS(options).minify(input);
}

//
// Returning the final CSS file when generating in Hexo
//
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
