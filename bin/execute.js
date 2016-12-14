#! /usr/bin/env node

var shell = require('shelljs');
var argv = require('yargs').argv;

shell.exec(`node ./node_modules/cli-rxss-native/index.js -g ${ argv.g || argv.generate } -n ${ argv.n || arvg.name }`);