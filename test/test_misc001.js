
import { expect } from 'chai';
import { convertTime } from '../dist/misc_001.js';

describe('Misc. 1', () => {
    describe('#convertTime()', () => {
        it('Should return the correct 24-hour time format for the given 12-hour time input', () => {
            expect(convertTime('12:40:22AM')).to.equal('00:40:22');
            expect(convertTime('01:35:12AM')).to.equal('01:35:12');
            expect(convertTime('11:01:01AM')).to.equal('11:01:01');

            expect(convertTime('12:40:22PM')).to.equal('12:40:22');
            expect(convertTime('01:35:12PM')).to.equal('13:35:12');
            expect(convertTime('11:01:01PM')).to.equal('23:01:01');
        });
    });
});