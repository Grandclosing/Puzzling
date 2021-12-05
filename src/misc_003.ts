
/* Puzzle
   Given an array of integers, where all elements but one occur twice, find the unique element.

   For example, given array [1, 2, 3, 4, 3, 2, 1], function should return 4
*/

export const findUnique = (a: number[]): number | undefined => {
    return a.find((n) => {
        let idx = a.indexOf(n);
        return a.indexOf(n, idx + 1) === -1;
    });
}