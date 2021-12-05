
/* Puzzle
   You will be given a list of 32 bit unsigned integers. 
   Flip all the bits ( and ) and return the result as an unsigned integer.
*/

export const flipBits = (n: number): number => {
    let inputBinaryString : string[] = (n >>> 0).toString(2).padStart(32, '0').split('');
    let outputBinary : string[] = [];
    
    inputBinaryString.forEach((elem, idx) => 
        outputBinary[idx] = elem === '1' ? '0' : '1');
        
    return parseInt(outputBinary.join(''), 2);
}