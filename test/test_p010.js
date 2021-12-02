
import { expect } from 'chai';
import { LinkedList } from '../dist/lib/LinkedList.js';
import { removeDuplicates } from '../dist/p_010.js';

describe('Puzzle 10', () => {
    describe('#removeDuplicates()', () => {
        it("Should throw an error if the linked list input is null or undefined", () => {
            expect(() => {
                removeDuplicates(null);
            }).to.throw("Expecting valid LinkedList input");

            expect(() => {
                removeDuplicates(undefined);
            }).to.throw("Expecting valid LinkedList input");
        });

        it("Should throw an error if the linked list passed in is empty", () => {
            expect(() => {
                removeDuplicates(new LinkedList());
            }).to.throw("Expecting non-empty list");
        });

        it("Should leave a list with only unique elements unchanged", () => {
            let myList = new LinkedList();

            myList.append(1);
            myList.append("A");
            myList.append(false);
            myList.append(3.14);

            let copyList = LinkedList.copy(myList);

            expect(myList.length).to.equal(4);

            let current = myList.raw;

            expect(current.value).to.equal(1);
            current = current.next;

            expect(current.value).to.equal("A");
            current = current.next;

            expect(current.value).to.be.false;
            current = current.next;

            expect(current.value).to.equal(3.14);

            removeDuplicates(myList);

            expect(LinkedList.areIdentical(myList, copyList)).to.be.true;
        });

        it("Should remove nodes containing duplicate data", () => {
            let myList = new LinkedList();

            myList.append("A");
            myList.append("B");
            myList.append("A");
            myList.append("A");
            myList.append("C");
            myList.append("D");
            myList.append("E");
            myList.append("A");

            expect(myList.length).to.equal(8);

            removeDuplicates(myList);

            expect(myList.length).to.equal(5);

            let current = myList.raw;
            expect(current.value).to.equal('A');

            current = current.next;
            expect(current.value).to.equal('B');

            current = current.next;
            expect(current.value).to.equal('C');

            current = current.next;
            expect(current.value).to.equal('D');

            current = current.next;
            expect(current.value).to.equal('E');
        });
    });
});