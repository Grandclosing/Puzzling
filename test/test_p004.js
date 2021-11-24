
import { expect } from 'chai';
import { is_permuation_of_palindrome } from '../dist/p_004.js';

describe('Puzzle 4', () => {
    describe('#is_permuation_of_palindrome()', () => {
        it('Should throw an exception when an empty, null, or undefined string is passed in for the input', () => {
            expect(() => {
                is_permuation_of_palindrome('');
            }).to.throw('Expecting valid, non-empty string input');

            expect(() => {
                is_permuation_of_palindrome(null);
            }).to.throw('Expecting valid, non-empty string input');

            expect(() => {
                is_permuation_of_palindrome(undefined);
            }).to.throw('Expecting valid, non-empty string input');
        });

        it('Should return true for strings passed in that are verified permutations of palindromes, using default options', () => {
            expect(is_permuation_of_palindrome('a')).to.be.true;
            expect(is_permuation_of_palindrome('aa')).to.be.true;

            // abccba, for instance 
            expect(is_permuation_of_palindrome('cbaacb')).to.be.true;

            // abcdcba, for instance 
            expect(is_permuation_of_palindrome('dbbaacc')).to.be.true;
        });

        it('Should return false for strings passed in that are not permutations palindromes, using default options', () => {
            expect(is_permuation_of_palindrome('ab')).to.be.false;
            expect(is_permuation_of_palindrome('abccdeffg')).to.be.false;
        });

        it('Should correctly apply rules for space characters', () => {
            /* odd #of d's does not conflict with odd # of spaces; spaces do not count by default */
            expect(is_permuation_of_palindrome('aa  bc bcd')).to.be.true;

            /* test passed-in behavior is identical to default */
            expect(is_permuation_of_palindrome('aa  bc bcd', false)).to.be.true;

            /* even # of spaces shouldn't break the palindrome */
            expect(is_permuation_of_palindrome('aa bc bcd', true)).to.be.true;

            expect(is_permuation_of_palindrome('aa  bc bcd', true)).to.be.false;
        });

        it('Should correctly apply rules for case sensitivity', () => {
            /* default: case insensitive; below should form palindrome abcdcba */
            expect(is_permuation_of_palindrome('abcABCd')).to.be.true;

            expect(is_permuation_of_palindrome('abcABCd', false, true)).to.be.false;
        });
    });
});