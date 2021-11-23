
import { expect } from 'chai';
import { contains_unique_chars } from '../dist/p_001.js';

describe('Puzzle 1', () => {
    describe('#contains_unique_chars()', () => {
        it('Should throw an exception when an empty, null, or undefined string is passed in', () => {
            expect(() => {
                contains_unique_chars("", 'ascii', true);
            }).to.throw('Expecting valid, non-empty string input');

            expect(() => {
                contains_unique_chars(null, 'ascii', true);
            }).to.throw('Expecting valid, non-empty string input');

            expect(() => {
                contains_unique_chars(undefined, 'ascii', true);
            }).to.throw('Expecting valid, non-empty string input');
        });

        it('Should throw an exception when passed in an encoding not one of ascii or unicode', () => {
            expect(() => {
                contains_unique_chars("abc", 'ascii', true);
            }).to.not.throw();

            expect(() => {
                contains_unique_chars("abc", 'unicode', true);
            }).to.not.throw();

            expect(() => {
                contains_unique_chars("abc", 'ISO 8859-5', true);
            }).to.throw('Unsupported encoding: ISO 8859-5');
        });

        it('Should return true for completely unique strings', () => {
            expect(contains_unique_chars('a', 'ascii', true)).to.be.true;

            expect(contains_unique_chars('abcdefg', 'ascii', true)).to.be.true;

            expect(contains_unique_chars('qwertyuiop[]1234567890-=!@#$%^&*()_+', 'ascii', true)).to.be.true;
        });

        it('Should return false for non-unique strings', () => {
            expect(contains_unique_chars('aa', 'ascii', true)).to.be.false;

            expect(contains_unique_chars('abcdefgha', 'ascii', true)).to.be.false;

            expect(contains_unique_chars('qwertyuiop[]1234567890-=!@#$%^&*()_+aa', 'ascii', true)).to.be.false;

            expect(contains_unique_chars('qwertyuiop[]123456a7a890-=!@#$%^&*()_+', 'ascii', true)).to.be.false;
        });
    });
});