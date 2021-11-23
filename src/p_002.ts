
/* PUZZLE 
   Given two strings, write a method to decide if one is a permutation of the other.
*/

/* 
 * A string is a permutation of another if it contains the same exact characters, but order of characters does not matter. 
 * For example, permutations of "abc" are: 
 *   "abc", "acb", "bac", "bca", "cab", "cba"
 * 
 * For any string there is always n! permutations, where n is the number of characters in the string 
*/
const is_permutation_simple = (input : string, toCheck : string) : boolean => {
    /* This is a concise solution, but it's not very efficient. We're creating arrays and re-joining them into strings.
       Unfortunately, in JavaScript strings are immutable and any methods (like trim, slice, etc.) just create copies, 
       so this is the best we can do using built-in methods. */
    return input.split('').sort().join('') === toCheck.split('').sort().join('');
}

const is_permutation_quick = (input : string, toCheck : string) : boolean => {
    let charCounts : number[] = [];
    for (let i = 0; i < input.length; ++i) {
        const cCode : number = input.charCodeAt(i);

        charCounts[cCode] = charCounts[cCode] ? charCounts[cCode] + 1 : 1;
    }

    for(let i = 0; i < toCheck.length; ++i) {
        const cCode : number = toCheck.charCodeAt(i);

        if(--charCounts[cCode] < 0)
            return false;
    }

    return true;
}

export const is_permutation = (input : string, toCheck : string, quick : boolean = true) : boolean => {
    if(!input)   throw new Error('Expecting valid, non-empty string input');
    if(!toCheck) throw new Error('Expecting valid, non-empty string to compare with');

    if(input.length != toCheck.length) return false;
    if(input.length === 1 && input.length === toCheck.length) return input === toCheck;

    return quick ? is_permutation_quick(input, toCheck) : is_permutation_simple(input, toCheck);
}