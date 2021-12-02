
/* For puzzles 9 and beyond, we'll need a linked list implementation to work with. 
   I also wanted to write some helper functions to help me easily generate, print,
   and manipulate these */

// normally we wouldn't export the underlying data structure, but I'm using it directly in my puzzles
export class LLNode {
   value : any;
   next : LLNode | null;
   prev : LLNode | null;

   constructor(newValue : any) {
      this.value = newValue;
      this.next = null;
      this.prev = null;
   }
}

export class LinkedList {
   head : LLNode | null;
   length : number;
   doublyLinked : boolean;

   constructor(newValue : any = null, doubly : boolean = false) {
      this.head = (newValue ? new LLNode(newValue) : null);
      this.length = (this.head ? 1 : 0);
      this.doublyLinked = doubly;
   }

   // to do these puzzle challenges without changing the implementation of LinkedList
   get raw() : LLNode | null {
      return this.head;
   }

   isEmpty() : boolean {
      return this.length == 0;
   }

   append(newValue : any) : void {
      let newNode = new LLNode(newValue);

      if(!this.head) {
         this.head = newNode;
      } else {
         let current : LLNode = this.head;
         while(current.next !== null) {
            current = current.next;
         }

         current.next = newNode; 

         if(this.doublyLinked) 
            current.next.prev = current;
      }

      this.length++;
   }

   prepend(newValue : any) : void {
      let newNode = new LLNode(newValue);

      newNode.next = this.head;
      this.head = newNode;

      this.head.next!.prev = this.head;

      this.length++;
   }

   removeByIndex(index : number) {
      if(index >= this.length) return;

      if(index == 0) {
         if(this.head) {
            this.head = this.head.next;

            if(this.doublyLinked && this.head)
               this.head.prev = null;

            this.length--;
         }

         return;
      }
      
      let current : LLNode = this.head!;
      for(let i = 0; i < index - 1; ++i) {
         current = current.next!;
      }

      // we assume current is valid since our length should be accurate
      current.next = current.next!.next;

      if(this.doublyLinked && current.next)
         current.next.prev = current;
         
      this.length--;
   }

   removeByValue(value : any) : void {
      let current : LLNode | null = this.head;

      if(current == null) return;

      if(current.value === value) {
         this.head = current.next;

         if(this.doublyLinked)
            this.head!.prev = null;

         this.length--;
         return;
      }

      while(current !== null) {
         if(current.next && current.next.value === value) {
            current.next = current.next.next;

            if(this.doublyLinked && current.next) 
               current.next.prev = current;

            this.length--;
            break;
         }
         
         current = current.next;
      }
   }

   toString() : string {
      let ret : string = "";
      let current : LLNode | null = this.head;

      for(let i = 0; i < this.length; ++i) {
         // we assume current is valid since our length should be accurate
         ret += `[${current!.value}]${(i < this.length - 1) ? " --> " : ""}`;
         current = current!.next;
      }  

      return ret;
   }
}

export const generateList = (length : number) : LinkedList => {
   if(length <= 0) throw new Error("Invalid length; expecting positive integer");

   let ret = new LinkedList();

   for(let i = 0; i < length; ++i) {
      ret.append(Math.floor(Math.random() * 10) + 1);
   }

   return ret;
}