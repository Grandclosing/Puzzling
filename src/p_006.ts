
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