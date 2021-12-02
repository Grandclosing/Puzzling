/* PUZZLE
   Write code to remove duplicates from an unsorted linked list.
   How would you solve this problem if a temporary buffer is not allowed?
*/

import { LLNode, LinkedList } from './lib/LinkedList.js'

/* This is the final solution; to do this with an extra buffer you could use a hash table to store 
   the values we have already seen, and then only loop through the linked list once. However without 
   the extra buffer, you'll need to write a O(n^2) algorithm like this */
export const removeDuplicates = (list : LinkedList) : void => {
   if(!list) throw new Error("Expecting valid LinkedList input");
   if(list.isEmpty()) throw new Error("Expecting non-empty list");

   if(list.length == 1) return;

   let start : LLNode | null = list.raw; 
   
   while(start != null) {
      let back : LLNode | null = start;
      let front : LLNode | null = back.next;

      while(front != null) {
         if(start.value == front.value) {
            back.next = front.next;
            front = back.next;
            list.length--;

            continue;
         }

         back = front;
         front = front.next;
      }

      start = start.next;
   }
}