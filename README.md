# hexo-css-merge 
![released](https://badgen.net/badge/version/released/green) 
[![npm version](https://badge.fury.io/js/hexo-css-merge.svg)](https://badge.fury.io/js/hexo-css-merge)
<br/>This plugin is based on [hexo-clean-css](https://github.com/hexojs/hexo-clean-css) and [hexo-css-merge-script](https://github.com/MoNwastaken/hexo-css-merge-script)
# How to use
- [Install](#install)
- [Configuration](#configuration)
  - [Example](#example)
  - [Defaults](#defaults)
  - [Options](#options)
    - [Minify](#minify)
    - [Path](#path)
    - [Destination](#destination)
    - [Files](#files)
- [Important syntax](#important-syntax)
  - [CSS](#css)
  - [Path](#path)
### Install
In your hexo project folder issue the following command
<br>`npm install hexo-css-merge`
### Configuration
You can configure the plugin in your main `_config.yml` file. (NOT in your theme's `_config.yml` file)
#### Example:
```
css_merge:
  minify: true
  path: themes/landscape/source/css/
  destination: filenameTest
  files:
    - global
    - navbar
```
#### Defaults
```
destination: main
path: themes/landscape/source/css/
files: styles
minify: true
```
#### Options
##### Minify
An option to turn on or off the minification of the final CSS.
<br/>:exclamation: Disclaimer, this option needs [Hexo CleanCSS 1.0.0](https://www.npmjs.com/package/hexo-clean-css)
<br/>Install Hexo CleanCSS `npm i hexo-clean-css`
##### Path
The path for the CSS files you would like to merge.
<br/>:exclamation: Disclaimer, the plugin can only work with one path yet. You should store your CSS files in one folder.
##### Destination
The name of the final CSS file.
##### Files
The name of the CSS files you would like to merge, in the order you want them to.

### Important syntax
#### CSS
The plugin only works with CSS files. When adding the name of the CSS files you want to work with don't put `.css` after the file name. It gets filled automatically.
#### Path
The added path should start without `/` and end with `/` or else it won't work
<br/>Example:
```
themes/landscape/source/css/
```
[![NPM](https://nodei.co/npm/hexo-css-merge.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/hexo-css-merge/)
