
/* PUZZLE 
   Implement a method to perform basic string compression using the counts
   of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
   "compressed" string would not become smaller than the original string, your method should return
   the original string. You can assume the string has only uppercase and lowercase letters (a - z)
*/

/* My thinking here is that I can basically loop through the entire string once, create the compressed 
   string as I go, then check their lengths at the end and return the original if lengths are the same.

   The only down side to using JavaScript here seems to be that when we concatenate new pieces to the
   compressed string, we're actually creating copies of brand new strings (immutability, wooooo...)
   
   I added a 'preserve' option to compress further - it preserves single and double character instances */

export const compress = (input : string, preserve : boolean = false) : string => {
    if(!input) throw new Error('Expecting valid, non-empty string input');

    let compressed : string = "";
    let charCount : number = 0;
    let currentChar : string = "";

    for(const c of input) {
        if(currentChar) {
            if(currentChar !== c) {
                if(preserve) {
                    if(charCount == 1)
                        compressed += `${currentChar}`;
                    else if(charCount == 2)
                        /* Not strictly necessary, but better to preserve integrity of original string; 
                           gonna give decompressors less work to do */
                        compressed += `${currentChar}${currentChar}`; 
                    else 
                        compressed += `${currentChar}${charCount}`;
                } else {
                    compressed += `${currentChar}${charCount}`;
                }
                
                charCount = 0;
            } 
        }

        currentChar = c;
        ++charCount;
    }

    compressed += `${currentChar}${charCount}`;

    return compressed.length < input.length ? compressed : input;
}

/* Note about further optimization: 

   The above algorithm's runtime is O(n + m^2). 

   n comes from the fact that we are looping through the original input once. 
   m is the number of individual character sequences in the compressed string (e.g. aabbbcbb has 4 character sequences)

   It's m^2 because most concatenation algorithms do a find for end-of-string under the hood, prior to appending the 
   new character sequence. So every append is doing an additional loop through the compressed string. 

   In fact, in JavaScript this is even slower since each append is also implicitly allocating a brand new string 
   buffer, copying everything from the original compressed string over, and appending the new sequence in. (Wooo immutability..!)

   Things you could do to mitigate this: 

   1. Loop through the entire input first, and determine the length of the compressed output; if it's not shorter than the input,
      just return the original input and don't bother generating the compressed string at all. This will clock in at around O(2n)

   2. Don't use immutable data structures, build your compressed string in a data structure that can be modified in place 

   3. Write / use a smarter append function; for instance, in C, you could write a function that appends characters 
      to the end of a string, then returns a pointer to the next write position. For example: 

      char *smart_concat(char *target, char *to_append) {
          char *ptr = target;
          int count_appended = 0;

          while(*ptr != NULL) // just in case 
              ptr++;
          
          count_appended = sprintf(ptr, "%s", to_append);
          
          return ptr + count_appended;
      }

      Then to use it, it would work like: 

      char buffer[32] = {0};
      char *ptr = buffer;

      ptr = smart_concat(ptr, "Hello,");

      // no iterating through the full string necessary, it'll just plop the new string right on the end
      ptr = smart_concat(ptr, " world!");

      printf("%s\n", buffer);
*/