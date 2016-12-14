var program = require('commander');
var appRoot = require('app-root-path');
var fs = require('fs');

var componentTemplate = require('./templates/component');
var specComponentTemplate = require('./templates/spec-component');
var classComponentTemplate = require('./templates/class-component');
var containerTemplate = require('./templates/container');
var storeTemplate = require('./templates/store');
var specStoreTemplate = require('./templates/spec-store');
var componentMobxTemplate = require('./templates/component-mobx');
var specComponentMobxTemplate = require('./templates/spec-component-mobx');
var classComponentMobxTemplate = require('./templates/class-component-mobx');
var containerMobxTemplate = require('./templates/container-mobx');

var utils = require('./utils');

/**
 * Grab type and name, also provide --help functionality
 */
program
    .option('-g, --generate <type>, generate a new application element')
    .option('-n, --name <name>, name for new file')
    .option('-t, --target <target>, target ios, android, or shared')
    .parse(process.argv)

const LOWER = utils.snakeToCamelCase(program.name.toLowerCase());
const CAPITAL = utils.toCapitalCase(LOWER);
const IS_COMPONENT = program.generate === 'component' ||
                     program.generate === 'component:mobx' ||
                     program.generate === 'class-component' ||
                     program.generate === 'class-component:mobx';

const TARGET = program.target && IS_COMPONENT  ? '/' + program.target + '/' : '';
let canCreate = checkType(TARGET) ? true : invalidInput(TARGET);

switch (program.generate) {
    case 'component':
        
        if(canCreate){
            createAsset('components', CAPITAL, TARGET, componentTemplate, specComponentTemplate);
        }
        
        break;
    case 'component:mobx':

        if(canCreate){
            createAsset('components', CAPITAL, TARGET, componentMobxTemplate, specComponentMobxTemplate);
        }
        
        break;
    case 'class-component':

        if(canCreate){
            createAsset('components', CAPITAL, TARGET, classComponentTemplate, specComponentTemplate);
        }
        
        break;
    case 'class-component:mobx':

        if(canCreate){
            createAsset('components', CAPITAL, TARGET, classComponentMobxTemplate, specComponentMobxTemplate);
        }
        
        break;
    case 'container':
        createAsset('containers', CAPITAL, TARGET, containerTemplate, specComponentTemplate);
        break;
    case 'container:mobx':
        createAsset('containers', CAPITAL, TARGET, containerMobxTemplate, specComponentMobxTemplate);
        break;
    case 'store':
        createAsset('stores', LOWER + 'Store', TARGET, storeTemplate, specStoreTemplate);
        break;
    default:
        console.error(program.generate + ' is not a valid element that can be created');
        break;
}

/**
 * @param { string } target target folder for component
 * @returns { boolean } false if empty string otherwise true if ios, android, or shared
 */
function checkType(target) {
    return target === 'ios' || target === 'android' || target === 'shared';
}

/**
 * @param { string } target target folder for component
 * @returns { boolean } false always false because hits error
 */
function invalidInput(target) {
    console.error('INVALID TARGET: ', '"' + target + '"' + ' is not a valid target. -t or --target should be `ios`, `android`, or `shared`');
    return false;
}

/**
 * @param { string } type type of asset being created
 * @param { string } fileName formatted file name for asset
 * @param { function } fileTemplate template for asset that returns a string template 
 * @param { function } specTemplate spec template for asset that returns a string template  
 */
function createAsset(type, fileName, target, fileTemplate, specTemplate){
    const assetPath = appRoot + '/src/' + type + '/' + target + fileName;

    // Only writes to pre-existing 
    try {
        if(!fs.existsSync(appRoot + '/src/')) {
            fs.mkdirSync(appRoot + '/src/');
        };

        if(!fs.existsSync(appRoot + '/src/' + type + '/')){
            fs.mkdirSync(appRoot + '/src/' + type + '/');
        }

        fs.mkdirSync(assetPath);
        console.info(fileName + ' was successfully created!');
    } catch(err){
        console.error(err);
        console.error(`That ${type} already exists.  Delete existing file or choose another name.`);
    }

    fs.writeFile(assetPath + '.js', fileTemplate(LOWER, CAPITAL), function(err){
        if(err){
            console.error(err);
        }

        console.info(`${fileName}.js was successfully created!`)
    });

    fs.writeFile(appRoot + '/test/' + type + '/' + fileName + '.js', specTemplate(LOWER, CAPITAL), function(err){
        if(err){
            console.error(err);
        }

        console.info(`${CAPITAL} test file was successfully created!`);
    });


}