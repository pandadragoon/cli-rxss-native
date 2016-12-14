module.exports = function(name, upper){

return `
import { observable, action, computed } from 'mobx';

class ${upper}Store {
  @observable instanceVariable: Object;

  constructor(){
    this.instanceVariable = { /* initialize instance variables in constructor */};
  }
}

const ${name}Store = new ${upper}Store();

export default ${name}Store;
export { ${upper}Store };
`;
}