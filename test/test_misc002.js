
import { expect } from 'chai';
import { getMatchCounts } from '../dist/misc_002.js';

describe('Misc. 2', () => {
    describe('#getMatchCounts()', () => {
        it('Should return an array containing matching counts for each query string, given an input array of strings', () => {
            let counts = getMatchCounts(['abc', 'acdc', 'abc', 'hello', 'world', 'abc', 'acdc'], 
                                        ['abc', 'acdc', 'hello', 'world']);
            expect(counts).deep.equal([3, 2, 1, 1]);

            counts = getMatchCounts(['abc', 'def', 'ghi', 'jkl'], 
                                    ['xyz', '123', 'unme', 'hello']);
            expect(counts).deep.equal([0, 0, 0, 0]);

            counts = getMatchCounts([], ['abc', 'def', 'ghi', 'jkl']);
            expect(counts).deep.equal([0, 0, 0, 0]);

            counts = getMatchCounts(['abc', 'abc', 'abc', 'abc', 'abc'], 
                                    ['abc']);
            expect(counts).deep.equal([5]);
        });
    });
});