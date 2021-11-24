
import { expect } from 'chai';
import { isPermutationOfPalindrome } from '../dist/p_004.js';

describe('Puzzle 4', () => {
    describe('#isPermutationOfPalindrome()', () => {
        it('Should throw an exception when an empty, null, or undefined string is passed in for the input', () => {
            expect(() => {
                isPermutationOfPalindrome('');
            }).to.throw('Expecting valid, non-empty string input');

            expect(() => {
                isPermutationOfPalindrome(null);
            }).to.throw('Expecting valid, non-empty string input');

            expect(() => {
                isPermutationOfPalindrome(undefined);
            }).to.throw('Expecting valid, non-empty string input');
        });

        it('Should return true for strings passed in that are verified permutations of palindromes, using default options', () => {
            expect(isPermutationOfPalindrome('a')).to.be.true;
            expect(isPermutationOfPalindrome('aa')).to.be.true;

            // abccba, for instance 
            expect(isPermutationOfPalindrome('cbaacb')).to.be.true;

            // abcdcba, for instance 
            expect(isPermutationOfPalindrome('dbbaacc')).to.be.true;
        });

        it('Should return false for strings passed in that are not permutations palindromes, using default options', () => {
            expect(isPermutationOfPalindrome('ab')).to.be.false;
            expect(isPermutationOfPalindrome('abccdeffg')).to.be.false;
        });

        it('Should correctly apply rules for space characters', () => {
            /* odd #of d's does not conflict with odd # of spaces; spaces do not count by default */
            expect(isPermutationOfPalindrome('aa  bc bcd')).to.be.true;

            /* test passed-in behavior is identical to default */
            expect(isPermutationOfPalindrome('aa  bc bcd', false)).to.be.true;

            /* even # of spaces shouldn't break the palindrome */
            expect(isPermutationOfPalindrome('aa bc bcd', true)).to.be.true;

            expect(isPermutationOfPalindrome('aa  bc bcd', true)).to.be.false;
        });

        it('Should correctly apply rules for case sensitivity', () => {
            /* default: case insensitive; below should form palindrome abcdcba */
            expect(isPermutationOfPalindrome('abcABCd')).to.be.true;

            expect(isPermutationOfPalindrome('abcABCd', false, true)).to.be.false;
        });
    });
});