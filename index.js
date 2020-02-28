var fs = require('hexo-fs');
var allcontent = '';
var contents = [];

for (i = 0; i < config.css_merge.length; i++) {
    contents.push(config.css_merge[i]);
}

for (i = 0; i < contents.length; i++) {
    allcontent = allcontent + fs.readFileSync(contents[i]) + ' ';
}


var CleanCSS = require('clean-css');
var input = allcontent;
var options = {  };
var output = new CleanCSS(options).minify(input);

hexo.extend.generator.register('css-merge', function (locals) {

    return {

        path: '/css/main.css',
        data: function(){
            return output.styles;
        }

    };

});
