module.exports = function(name, upper){

return `
import { ${upper}Store } from './${name}Store';
import chai, { expect } from 'chai';

describe('${upper} Store', ()=> {
    let store;

    beforeEach(()=> {
        store = new ${upper}Store();
    });

});
`;
}