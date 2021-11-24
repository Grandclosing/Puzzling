
import { expect } from 'chai';
import { isAtMostOneEditAway } from '../dist/p_005.js';

describe('Puzzle 4', () => {
    describe('#isAtMostOneEditAway()', () => {
        it('Should throw an exception when an empty, null, or undefined string is passed in for either of the arguments', () => {
            expect(() => {
                isAtMostOneEditAway('', 'abc');
            }).to.throw('Expecting valid, non-empty string input');

            expect(() => {
                isAtMostOneEditAway(null, 'abc');
            }).to.throw('Expecting valid, non-empty string input');

            expect(() => {
                isAtMostOneEditAway(undefined, 'abc');
            }).to.throw('Expecting valid, non-empty string input');

            expect(() => {
                isAtMostOneEditAway('abc', '');
            }).to.throw('Expecting valid, non-empty string input');

            expect(() => {
                isAtMostOneEditAway('abc', null);
            }).to.throw('Expecting valid, non-empty string input');

            expect(() => {
                isAtMostOneEditAway('abc', undefined);
            }).to.throw('Expecting valid, non-empty string input');
        });

        it('Should return true for strings that have been only edited one way', () => {
            /* replacements */
            expect(isAtMostOneEditAway('abc', 'aba')).to.be.true;
            expect(isAtMostOneEditAway('abc', 'acc')).to.be.true;
            expect(isAtMostOneEditAway('abc', 'cbc')).to.be.true;

            /* Removals */
            expect(isAtMostOneEditAway('abc', 'ab')).to.be.true;
            expect(isAtMostOneEditAway('abc', 'bc')).to.be.true;
            expect(isAtMostOneEditAway('abc', 'ac')).to.be.true;

            /* Additions */
            expect(isAtMostOneEditAway('abc', 'abcd')).to.be.true;
            expect(isAtMostOneEditAway('abc', 'dabc')).to.be.true;
            expect(isAtMostOneEditAway('abc', 'adbc')).to.be.true;
        });

        it('Should return false for strings that have been edited in multiple ways', () => {
            /* Removal + Addition */
            expect(isAtMostOneEditAway('ab', 'abcd')).to.be.false;

            /* Additions */
            expect(isAtMostOneEditAway('abc', 'abcdefg')).to.be.false;

            /* Replacements */
            expect(isAtMostOneEditAway('abcdef', 'abQdQf')).to.be.false;
        });
    });
});