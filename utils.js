function utils(){
    var toCapitalCase = function(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    var snakeToCamelCase = function (type) {

  // replaces - and then capitalizes next letter
  // turns 'example-text' into 'exampleText'

    let formattedType = type;
    while(formattedType.indexOf('-') !== -1){
        let idx = formattedType.indexOf('-');
        let splitString = formattedType.split('');
        splitString.splice(idx, 1);
        splitString[idx] = splitString[idx].toUpperCase();
        formattedType = splitString.join('');
    }

    return formattedType;
    }

     return {
        toCapitalCase,
        snakeToCamelCase
    }
}

module.exports = utils();