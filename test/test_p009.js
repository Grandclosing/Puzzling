
import { expect } from 'chai';
import { isRotation } from '../dist/p_009.js';

describe('Puzzle 9', () => {
    describe('#isRotation()', () => {
        it("Should throw an error if either string supplied is empty, null, or undefined", () => {
            expect(() => {
                isRotation("", "abc");
            }).to.throw("Expecting defined, non-empty, non-null strings");

            expect(() => {
                isRotation(null, "abc");
            }).to.throw("Expecting defined, non-empty, non-null strings");

            expect(() => {
                isRotation(undefined, "abc");
            }).to.throw("Expecting defined, non-empty, non-null strings");

            expect(() => {
                isRotation("abc", "");
            }).to.throw("Expecting defined, non-empty, non-null strings");

            expect(() => {
                isRotation("abc", null);
            }).to.throw("Expecting defined, non-empty, non-null strings");

            expect(() => {
                isRotation("abc", undefined);
            }).to.throw("Expecting defined, non-empty, non-null strings");

            expect(() => {
                isRotation("", "");
            }).to.throw("Expecting defined, non-empty, non-null strings");

            expect(() => {
                isRotation(null, undefined);
            }).to.throw("Expecting defined, non-empty, non-null strings");

            expect(() => {
                isRotation(undefined, null);
            }).to.throw("Expecting defined, non-empty, non-null strings");
        });

        it("Should return false for unrelated strings", () => {
            expect(isRotation("abc", "def")).to.be.false;

            expect(isRotation("Firefighter", "ighterFired")).to.be.false;
        });

        it("Should return true for strings that are rotations of each-other", () => {
            expect(isRotation("Firefighter", "ighterFiref")).to.be.true;

            expect(isRotation("abcdef", "defabc")).to.be.true;
        });
    });
});