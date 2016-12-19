module.exports = function(name, upper){

return `
import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

import {${name} as ${upper}}  from './${upper}';
import /* store-name */ from /* store-name */;

describe('${upper}', ()=> {
    let ${name};

    describe('with props set', ()=> {
        let props = {/* add props and store here */};

        beforeEach(()=>{
            ${name} = shallow(
                <${upper} {...props} />
            );
        });

        it('exists', ()=> {
            expect(${name}).to.exist;
        });

    });

    describe('with props not set', ()=> {
        beforeEach(()=> {
            ${name} = shallow(
                <${upper} />
            );
        });

    });
});
`;

}