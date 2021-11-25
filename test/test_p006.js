
import { expect } from 'chai';
import { compress } from '../dist/p_006.js';

describe('Puzzle 6', () => {
    describe('#compress()', () => {
        it('Should throw an exception when an empty, null, or undefined string is passed in for the input', () => {
            expect(() => {
                compress('');
            }).to.throw('Expecting valid, non-empty string input');

            expect(() => {
                compress(null);
            }).to.throw('Expecting valid, non-empty string input');

            expect(() => {
                compress(undefined);
            }).to.throw('Expecting valid, non-empty string input');
        });

        it('Should return the original string if compressed string isn\'t shorter; using default settings', () => {
            expect(compress('ABC')).to.equal('ABC');
            expect(compress('AABBCC')).to.equal('AABBCC');
            expect(compress('ABCCC')).to.equal('ABCCC');
        }); 

        it('Should return the compressed string if compressed string is shorter; using default settings', () => {
            expect(compress('AAABB')).to.equal('A3B2');
            expect(compress('AAAAA')).to.equal('A5');
        });

        it('Should preserve single- and double-occurrence characters, which may further compress strings', () => {
            expect(compress('AABBBCDDDD', true)).to.equal('AAB3CD4');
            expect(compress('ABCDDDDDDDDD', true)).to.equal('ABCD9');
        });
    });
});