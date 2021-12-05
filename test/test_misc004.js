
import { expect } from 'chai';
import { flipBits } from '../dist/misc_004.js';

describe('Misc. 4', () => {
    describe('#flipBits()', () => {
        it('Should flip the bits of a number', () => {
           expect(flipBits(Number.MAX_SAFE_INTEGER)).to.equal(0);
           expect(flipBits(2147483647)).to.equal(2147483648);
           expect(flipBits(1)).to.equal(4294967294);
           expect(flipBits(0)).to.equal(4294967295);
        });
    });
});