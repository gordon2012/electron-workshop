const chai = require('chai');
chai.should();
const electron = require('electron');
const app = electron.app;

describe('renderer tests', () => {
    it('should test 5 != 4', () => {
        Number(5).should.not.equal(4);
    });
});
