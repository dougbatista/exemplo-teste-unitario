var expect  = require('chai').expect;
const index = require('../index');

describe('Teste do hello world', () => {
    it('Main page content', function() {
        expect(index.teste()).to.equal('Hello World');
    });
})