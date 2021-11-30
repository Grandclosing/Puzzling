
/* PUZZLE
   Assumeyou have a method isSubstringwhich checks if oneword is a substring
   of another. Given two strings, sl and s2, write code to check if s2 is a rotation of s1 using only one
   call to isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat")
*/

function isSubstring(needle : string, haystack : string) : boolean {
    return haystack.indexOf(needle) !== -1;
}

export const isRotation = (s1 : string, s2 : string) : boolean => {
    if(!s1 || !s2) throw new Error("Expecting defined, non-empty, non-null strings");

    if(s2.length > s1.length) return false;

    return isSubstring(s2, s1 + s1);
}