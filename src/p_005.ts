
/* PUZZLE 
   There are three types of edits that can be performed on strings: insert a character,
   remove a character, or replace a character. Given two strings, write a function to check if they are
   one edit (or zero edits) away

   Example:

   pale, ple   -> true
   pales, pale -> true
   pale, bale  -> true
   pale, bake  -> false 
*/

export const isAtMostOneEditAway = (first : string, second : string) : boolean => {
    if(!first || !second) throw new Error('Expecting valid, non-empty string input');

    if(Math.abs(first.length - second.length) > 1)
        return false;

    let f_idx : number = 0;
    let s_idx : number = 0;
    
    let changeDetected : boolean = false;

    while(true) {
        if(first[f_idx] != second[s_idx]) {
            if(changeDetected) return false;

            if(first.length == second.length) {
                // most likely a replacement
                changeDetected = true;
            } else if(first.length < second.length) {
                if(second[s_idx + 1] == first[f_idx]) {
                    // character was removed from first
                    changeDetected = true;
                    ++s_idx; 
                } else {
                    // multiple differences! 
                    return false;
                }
            } else if(first.length > second.length) {
                if(first[f_idx + 1] == second[s_idx]) {
                    // character was removed from second
                    changeDetected = true;
                    ++f_idx;
                } else {
                    // multiple differences!
                    return false;
                }
            }
        }

        ++f_idx;
        ++s_idx;

        if(f_idx == first.length || s_idx == second.length) {
            /* if we're reached this far, then either one of the strings is longer (which is the one and only edit),
               or the strings are identical */
            return true;
        }
    }
}