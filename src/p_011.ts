
/* PUZZLE 
   Implement an algorithm to find the kth to last element of a singly linked list.
*/

import { LLNode } from './lib/LinkedList.js';

/* using a raw linked list node, as opposed to my LinkedList class so I don't 
have access to the list length right off the bat */


// The first solution that comes to mind is just compute the length first, then find the node we're looking for 
// This is O(2n) since we're iterating through the list of n nodes twice; but the constant is negligible, so it's O(n)
export const getKthFromLastSimple = (head : LLNode | null, k : number) : LLNode | null => {
    if(!head) throw new Error("Expecting valid linked list head node");
    if(k < 0) throw new Error("Expecting k >= 0");

    let listLength = 0;                                                                                                                                                                                                   
    let current : LLNode = head;

    while(current != null) {
        listLength++;
        current = current.next!;
    }

    // not much we can do here - either throw an error or return the zeroth element 
    if(k > listLength) return head;

    current = head;
    for(let i = 0; i < listLength - k; ++i) {
        current = current.next!;
    }

    return current;
}

/* This solution allows for one iteration through the list with a standard leader/follower algorithm */
export const getKthFromLastWithTwoIterators = (head : LLNode | null, k : number) : LLNode | null => {
    if(!head) throw new Error("Expecting valid linked list head node");
    if(k < 0) throw new Error("Expecting k >= 0");

    let leader : LLNode = head;
    let follower : LLNode = head;
    let nodeIndex = 0;

    for(nodeIndex = 0; nodeIndex < k && leader != null; ++nodeIndex) {
        leader = leader.next!;
    }

    // implies we ran out of nodes early - either error out or just return the head 
    if(nodeIndex != k)
        return head;

    while(leader != null) {
        leader = leader.next!;
        follower = follower.next!;
    }

    return follower;
}

// everyone (including me) tries to stay away from recursion, but here we go...

let countFromBack = 0;
export const getKthFromLastWithRecursion = (head : LLNode | null, k : number) : LLNode | null => {
    if(!head) {
        countFromBack = 0;
        return head;
    }

    let current : LLNode | null = getKthFromLastWithRecursion(head.next, k);

    if(countFromBack === k) return current;

    countFromBack++;
    
    return head;
}
