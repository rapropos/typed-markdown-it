/// <reference path="typings/main.d.ts" />
/// <reference path="bundle/main.d.ts" />

import assert = require('assert')
import MarkdownIt = require('markdown-it')

assert.ok(typeof MarkdownIt === 'function')

const md = new MarkdownIt()
md.use(function(md, a) { console.log('1 == ' + a); }, 1)

var result = md.render('# markdown-it rulezz!')

console.log(result)
