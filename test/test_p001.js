
import { expect } from 'chai';
import { contains_unique_chars } from '../dist/p_001.js';

describe('Puzzle 1', () => {
    describe('#contains_unique_chars()', () => {
        it('Should throw an exception when an empty, null, or undefined string is passed in', () => {
            expect(() => {
                contains_unique_chars("", 'utf-8', true);
            }).to.throw('Expecting valid, non-empty string input');
        });
    });
});