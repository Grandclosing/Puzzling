
import { expect } from 'chai';
import { is_permutation } from '../dist/p_002.js';

describe('Puzzle 2', () => {
    describe('#is_permutation()', () => {
        it('Should throw an exception when an empty, null, or undefined string is passed in for either the source or comparison string', () => {
            expect(() => {
                is_permutation('', 'bca');
            }).to.throw('Expecting valid, non-empty string input');

            expect(() => {
                is_permutation(null, 'bca');
            }).to.throw('Expecting valid, non-empty string input');

            expect(() => {
                is_permutation(undefined, 'bca');
            }).to.throw('Expecting valid, non-empty string input');

            expect(() => {
                is_permutation('abc', '');
            }).to.throw('Expecting valid, non-empty string to compare with');

            expect(() => {
                is_permutation('abc', null);
            }).to.throw('Expecting valid, non-empty string to compare with');

            expect(() => {
                is_permutation('abc', undefined);
            }).to.throw('Expecting valid, non-empty string to compare with');
        });

        it('Should return true for both algorithms when a string and its permutation are passed in', () => {
            expect(is_permutation('a', 'a')).to.be.true;
            expect(is_permutation('a', 'a', false)).to.be.true;

            expect(is_permutation('abc', 'abc')).to.be.true;
            expect(is_permutation('abc', 'abc', false)).to.be.true;

            expect(is_permutation('abc', 'cba')).to.be.true;
            expect(is_permutation('abc', 'cba', false)).to.be.true;

            expect(is_permutation('a1b2c3', '123abc')).to.be.true;
            expect(is_permutation('a1b2c3', '123abc', false)).to.be.true;
        });

        it('Should return false for both algorithms when two unrelated strings are passed in', () => {
            expect(is_permutation('a', 'b')).to.be.false;
            expect(is_permutation('a', 'b', false)).to.be.false;

            expect(is_permutation('abc', 'def')).to.be.false;
            expect(is_permutation('abc', 'def', false)).to.be.false;

            expect(is_permutation('abc', '123')).to.be.false;
            expect(is_permutation('abc', '123', false)).to.be.false;

            expect(is_permutation('a1b2c3', '123bbc')).to.be.false;
            expect(is_permutation('a1b2c3', '123bbc', false)).to.be.false;
        });
    });
});