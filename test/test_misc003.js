
import { expect } from 'chai';
import { findUnique } from '../dist/misc_003.js';

describe('Misc. 3', () => {
    describe('#findUnique()', () => {
        it('Should find the unique element of a list of numbers', () => {
           expect(findUnique([1, 2, 3, 4, 3, 2, 1])).to.equal(4);
           expect(findUnique([0, 0, 0, 0, 0, 0, 1])).to.equal(1);
           expect(findUnique([1, 0, 0, 0, 0, 0, 0])).to.equal(1);
           expect(findUnique([0, 0, 0, 1, 0, 0, 0])).to.equal(1);
           expect(findUnique([12])).to.equal(12);
        });

        it('Should return undefined when there are no unique elements in the list', () => {
            expect(findUnique([1, 1, 2, 2, 3, 3, 4, 4])).to.be.undefined;
            expect(findUnique([1, 1, 1, 1, 1])).to.be.undefined;
            expect(findUnique([0, 0])).to.be.undefined;
            expect(findUnique([])).to.be.undefined;
        });

        it('Should return the first unique element when multiple elements in a list are unique', () => {
            expect(findUnique([0, 1, 2, 3])).to.equal(0);
            expect(findUnique([123, 1, 1, 2, 2, 321])).to.equal(123);
        });
    });
});