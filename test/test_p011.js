
import { expect } from 'chai';
import { LinkedList } from '../dist/lib/LinkedList.js';
import { getKthFromLastSimple, getKthFromLastWithTwoIterators, getKthFromLastWithRecursion } from '../dist/p_011.js';

describe('Puzzle 11', () => {
    describe('#getKthFromLastSimple()', () => {
        it('Should throw an exception when passed in a null or undefined linked list node', () => {
            expect(() => {
                getKthFromLastSimple(null, 3);
            }).to.throw('Expecting valid linked list head node');

            expect(() => {
                getKthFromLastSimple(undefined, 3);
            }).to.throw('Expecting valid linked list head node');
        });

        it('Should throw an error when passed in an invalid count k', () => {
            expect(() => {
                getKthFromLastSimple(new LinkedList(1), -5);
            }).to.throw('Expecting k >= 0');
        });

        it('Should grab the correct kth node from last', () => {
            let myList = new LinkedList();
            
            myList.append('A');
            myList.append('B');
            myList.append('C');
            myList.append('D');
            myList.append('E');

            expect(getKthFromLastSimple(myList.raw, 3).value).to.equal('C');
            expect(getKthFromLastSimple(myList.raw, 5).value).to.equal('A');
            expect(getKthFromLastSimple(myList.raw, 1).value).to.equal('E');
        });

        it('Should grab the return the first node in the linked list if k is out of bounds', () => {
            let myList = new LinkedList();
            
            myList.append('A');
            myList.append('B');
            myList.append('C');
            myList.append('D');
            myList.append('E');

            expect(getKthFromLastSimple(myList.raw, 10).value).to.equal('A');
        });
    });

    describe('#getKthFromLastWithTwoIterators()', () => {
        it('Should throw an exception when passed in a null or undefined linked list node', () => {
            expect(() => {
                getKthFromLastWithTwoIterators(null, 3);
            }).to.throw('Expecting valid linked list head node');

            expect(() => {
                getKthFromLastWithTwoIterators(undefined, 3);
            }).to.throw('Expecting valid linked list head node');
        });

        it('Should throw an error when passed in an invalid count k', () => {
            expect(() => {
                getKthFromLastWithTwoIterators(new LinkedList(1), -5);
            }).to.throw('Expecting k >= 0');
        });

        it('Should grab the correct kth node from last', () => {
            let myList = new LinkedList();
            
            myList.append('A');
            myList.append('B');
            myList.append('C');
            myList.append('D');
            myList.append('E');

            expect(getKthFromLastWithTwoIterators(myList.raw, 3).value).to.equal('C');
            expect(getKthFromLastWithTwoIterators(myList.raw, 5).value).to.equal('A');
            expect(getKthFromLastWithTwoIterators(myList.raw, 1).value).to.equal('E');
        });

        it('Should grab the return the first node in the linked list if k is out of bounds', () => {
            let myList = new LinkedList();
            
            myList.append('A');
            myList.append('B');
            myList.append('C');
            myList.append('D');
            myList.append('E');

            expect(getKthFromLastWithTwoIterators(myList.raw, 10).value).to.equal('A');
        });
    });

    describe('#getKthFromLastWithRecursion()', () => {
        it('Should throw an error when passed in an invalid count k', () => {
            expect(() => {
                getKthFromLastWithRecursion(new LinkedList(1), -5);
            }).to.throw('Expecting k >= 0');
        });

        it('Should grab the correct kth node from last', () => {
            let myList = new LinkedList();
            
            myList.append('A');
            myList.append('B');
            myList.append('C');
            myList.append('D');
            myList.append('E');

            expect(getKthFromLastWithRecursion(myList.raw, 3).value).to.equal('C');
            expect(getKthFromLastWithRecursion(myList.raw, 5).value).to.equal('A');
            expect(getKthFromLastWithRecursion(myList.raw, 1).value).to.equal('E');
        });

        it('Should grab the return the first node in the linked list if k is out of bounds', () => {
            let myList = new LinkedList();
            
            myList.append('A');
            myList.append('B');
            myList.append('C');
            myList.append('D');
            myList.append('E');

            expect(getKthFromLastWithRecursion(myList.raw, 10).value).to.equal('A');
        });
    });
});