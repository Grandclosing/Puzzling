
/* PUZZLE 
   Given a string, write a function to check if it is a permutation of a palindrome. 
   A palindrome is a word or phrase that is the same forwards and backwards. A permutation
   is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

   Example:

   Input: "Tact Coa" 
   Output: True (permutations: "taco cat", "atco cta")
*/

/* Based on my reading of this question, plus the examples, I'm guessing we're not considering spaces as part of the palindrome.
   I'm also assuming case-insensitivity. 

   Initially I thought I'd have to write code to generate every permutation of the given string, and check each of them to see if
   they're a palindrome, but I knew there had to be another way. 

   So I sat here just thinking about palindromes and their properties, and realized that in a palindrome: 

   - All letters must show up an even number of times 

   OR 

   - If any letter shows up an odd number of times, it must be only one of the letters (there can be only one "center" of a word) 
   
   In other words, any string containing more than one character of odd count CANNOT be a palindrome no matter how you rearrange the letters 

   */

export const is_permuation_of_palindrome = (input : string, 
                                            include_spaces : boolean = false,
                                            case_sensitive : boolean = false) : boolean => {
    if(!input) throw new Error('Expecting valid, non-empty string input');

    /* single-character words are always palindromes; and two-character words can only be palindromes if both are the same character */
    if(input.length == 1) return true;
    if(input.length == 2 && input[0] != input[1]) return false; 

    let charDict : Record<string, number> = {};

    for (let c of input) {
        if(c === ' ' && !include_spaces) 
            continue;

        if(!case_sensitive)
            c = c.toLowerCase();

        charDict[c] = charDict[c] ? charDict[c] + 1 : 1;
    }

    let foundOdd : boolean = false;
    for (const key in charDict) {
        if(charDict.hasOwnProperty(key)) {
            if(charDict[key] % 2 != 0) {
                if(foundOdd)
                    return false;
                else 
                    foundOdd = true;
            }
        }
    }

    return true;
}