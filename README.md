# hexo-css-merge 
![release](https://badgen.net/github/release/MoNwastaken/hexo-css-merge)  ![version](https://badgen.net/badge/version/alpha/red) 
![npm](https://badgen.net/badge/npm/0.0.1/blue)
<br/>The current version is not working! If you would like to use the plugin, there is a script version of it, [hexo-css-merge-script](https://github.com/MoNwastaken/hexo-css-merge-script), which is working. 
<br/>This plugin is based on [hexo-clean-css](https://github.com/hexojs/hexo-clean-css) and [hexo-css-merge-script](https://github.com/hexojs/hexo-clean-css)
# The difference between the script and the plugin
The basic idea is that this addon should be easy and fast to use. 
1. The user decides that they will use this addon
2. The user installs it with `npm install`
3. The user configures the plugin inside their `_config.yml` file

<br/>Configuration example:
```
css_merge:
  path: themes/test/source/css/
  destination: main
  files:
    - navbar
    - global
    - fonts
```
