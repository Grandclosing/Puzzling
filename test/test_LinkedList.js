
import { expect } from 'chai';
import { LinkedList } from '../dist/lib/LinkedList.js';

describe("LinkedList", () => {
    describe("#constructor()", () => {
        it("Should create an empty linked list if passed no arguments", () => {
            let myList = new LinkedList();

            expect(myList.length).to.equal(0);
            expect(myList.head).to.be.null;
            expect(myList.doublyLinked).to.be.false;
        });

        it("Should create a linked list of length 1 if supplied an argument", () => {
            let myList = new LinkedList("A");

            expect(myList.length).to.equal(1);
            expect(myList.head).to.not.be.null;
            expect(myList.doublyLinked).to.be.false;

            let current = myList.raw;

            expect(current.value).to.equal("A");
        });

        it("Should create a singly linked list if second parameter is not passed in, or false is passed in", () => {
            let myList = new LinkedList("A");

            myList.append("B");
            myList.append("C");

            expect(myList.length).to.equal(3);

            let back = myList.raw;
            expect(back.value).to.equal("A");

            let front = back.next;
            expect(front).to.not.be.null;
            expect(front.value).to.equal("B");
            expect(front.prev).to.be.null;

            back = front; 
            front = front.next;

            expect(front).to.not.be.null;
            expect(front.value).to.equal("C");
            expect(front.prev).to.be.null;

            myList = new LinkedList(1, false);

            myList.append(2);
            myList.append(3);

            expect(myList.length).to.equal(3);

            back = myList.raw;
            expect(back.value).to.equal(1);

            front = back.next;
            expect(front).to.not.be.null;
            expect(front.value).to.equal(2);
            expect(front.prev).to.be.null;

            back = front; 
            front = front.next;

            expect(front).to.not.be.null;
            expect(front.value).to.equal(3);
            expect(front.prev).to.be.null;
        });

        it("Should create a doubly linked list if second argument is passed in and true", () => {
            let myList = new LinkedList("A", true);

            myList.append("B");
            myList.append("C");

            expect(myList.length).to.equal(3);

            let back = myList.raw;
            expect(back.value).to.equal("A");

            let front = back.next;
            expect(front).to.not.be.null;
            expect(front.value).to.equal("B");
            expect(front.prev === back).to.be.true;

            back = front; 
            front = front.next;

            expect(front).to.not.be.null;
            expect(front.value).to.equal("C");
            expect(front.prev === back).to.be.true;
        });
    });

    describe("#append()", () => {
        it("Should append nodes to the end of the linked list", () => {
            let myList = new LinkedList();

            expect(myList.length).to.equal(0);

            myList.append("A");
            expect(myList.length).to.equal(1);

            let current = myList.raw;
            expect(current.value).to.equal("A");

            myList.append("B");
            expect(myList.length).to.equal(2);

            current = current.next;
            expect(current.value).to.equal("B");

            myList.append("C");
            expect(myList.length).to.equal(3);

            current = current.next;
            expect(current.value).to.equal("C");
        });
    });

    describe("#prepend()", () => {
        it("Should prepend nodes to the beginning of the linked list", () => {
            let myList = new LinkedList();

            expect(myList.length).to.equal(0);

            myList.prepend("A");
            expect(myList.length).to.equal(1);

            let current = myList.raw;
            let prevCurrent = current;
            expect(current.value).to.equal("A");

            myList.prepend("B");
            expect(myList.length).to.equal(2);

            current = myList.raw;
            expect(current.value).to.equal("B");
            expect(current.next === prevCurrent).to.be.true;
            prevCurrent = current;

            myList.prepend("C");
            expect(myList.length).to.equal(3);

            current = myList.raw;
            expect(current.value).to.equal("C");
            expect(current.next === prevCurrent).to.be.true;
        });
    });

    describe("#at()", () => {
        it("Should throw an error for negative indices", () => {
            let myList = new LinkedList(1);

            expect(() => {myList.at(-5)}).to.throw("Index must be positive integer");
        });

        it("Should return null for indices greater than the length of the linked list", () => {
            let myList = new LinkedList();

            myList.append("A");
            myList.append("B");
            myList.append("C");

            expect(myList.at(10)).to.be.null;
        });

        it("Should return the node at the given index", () => {
            let myList = new LinkedList();

            myList.append("A");
            myList.append("B");
            myList.append("C");

            expect(myList.at(0).value).to.equal("A");
            expect(myList.at(1).value).to.equal("B");
            expect(myList.at(2).value).to.equal("C");
        });
    });

    describe("#removeByIndex()", () => {
        it("Should leave the list alone if the index specified is larger than the length of the list", () => {
            let myList = new LinkedList();

            myList.append("A");
            myList.append("B");
            myList.append("C");

            expect(myList.length).to.equal(3);

            myList.removeByIndex(10);

            expect(myList.length).to.equal(3);
            expect(myList.at(0).value).to.equal("A");
            expect(myList.at(1).value).to.equal("B");
            expect(myList.at(2).value).to.equal("C");
        });

        it("Should remove the node at the given index", () => {
            let myList = new LinkedList();

            myList.append("A");
            myList.append("B");
            myList.append("C");
            myList.append("D");

            expect(myList.length).to.equal(4);
            expect(myList.at(0).value).to.equal("A");
            expect(myList.at(1).value).to.equal("B");
            expect(myList.at(2).value).to.equal("C");
            expect(myList.at(3).value).to.equal("D");
            
            // removal from beginning of list
            myList.removeByIndex(0);

            expect(myList.length).to.equal(3);
            expect(myList.at(0).value).to.equal("B");
            expect(myList.at(1).value).to.equal("C");
            expect(myList.at(2).value).to.equal("D");

            // removal from middle of list 
            myList.removeByIndex(1);

            expect(myList.length).to.equal(2);
            expect(myList.at(0).value).to.equal("B");
            expect(myList.at(1).value).to.equal("D");

            // removal from end of list
            myList.removeByIndex(1);

            expect(myList.length).to.equal(1);
            expect(myList.at(0).value).to.equal("B");

            // removal of last remaining element 
            myList.removeByIndex(0);
            expect(myList.length).to.equal(0);
        });
    });

    describe("#removeByValue()", () => {
        it("Should remove the node with the given value", () => {
            let myList = new LinkedList();

            myList.append("A");
            myList.append("B");
            myList.append("C");
            myList.append("D");

            expect(myList.length).to.equal(4);
            expect(myList.at(0).value).to.equal("A");
            expect(myList.at(1).value).to.equal("B");
            expect(myList.at(2).value).to.equal("C");
            expect(myList.at(3).value).to.equal("D");
            
            // removal from beginning of list
            myList.removeByValue("A");

            expect(myList.length).to.equal(3);
            expect(myList.at(0).value).to.equal("B");
            expect(myList.at(1).value).to.equal("C");
            expect(myList.at(2).value).to.equal("D");

            // removal from middle of list 
            myList.removeByValue("C");

            expect(myList.length).to.equal(2);
            expect(myList.at(0).value).to.equal("B");
            expect(myList.at(1).value).to.equal("D");

            // removal from end of list
            myList.removeByValue("D");

            expect(myList.length).to.equal(1);
            expect(myList.at(0).value).to.equal("B");

            // removal of last remaining element 
            myList.removeByValue("B");
            expect(myList.length).to.equal(0);
        });
    });
});