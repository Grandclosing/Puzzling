
/* PUZZLE 
   Implement an algorithm to determine if a string has all unique characters. What if you
   cannot use additional data structures? 
*/

// Particularly in JavaScript, it's easy to just throw each character in a dictionary, and use it to check if you've seen a character before 
const contains_unique_chars_simple = (input : string) : boolean => {
    if(!input) throw new Error('Expecting valid, non-empty string input');
    if(input.length == 1) return true;

    let charDict : Record<string, boolean> = {};

    for (const c of input) {
        if(charDict[c])
            return false;
        
        charDict[c] = true;
    }        
    
    return true;
}

// Addressing the 'What if you cannot use additional data structures?' part
const contains_unique_chars_in_place = (input : string) : boolean => {
    for(let current_index = 0; current_index < input.length - 1; ++current_index) {
        for(let next_index = current_index + 1; next_index < input.length; ++next_index) {
            if(input[current_index] == input[next_index])
                return false;
        }
    }
    
    return true;
}

/* 
 * Check character counts to short-circuit the logic
 *
 * Also enforcing non-empty, non-null, defined strings. I don't want to debate the philosophical 
 * positions of whether an empty string can be considered unique or non-unique... 
*/
export const contains_unique_chars = (input : string, encoding : string, inPlace : boolean) : boolean => {
    if(!input) throw new Error('Expecting valid, non-empty string input');
    if(input.length == 1) return true;
    
    switch(encoding) {
        case 'ascii': 
            if(input.length > 256)
                return false;
            break;
        case 'unicode': 
            // based on https://stackoverflow.com/a/5928054/3578493
            if(input.length > 1111998)
                return false;
            break;
        default: throw new Error(`Unsupported encoding: ${encoding}`);
    }

    return inPlace ? contains_unique_chars_in_place(input) : contains_unique_chars_simple(input);
}