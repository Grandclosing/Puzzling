
/* PUZZLE
   Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
   column are set to 0.
*/

export const zeroMatrix = (matrix : number[][]) : void => {
    if(!matrix || !matrix.length) throw new Error("Expecting valid matrix");

    for(let i = 0; i < matrix.length; ++i) {
        for(let j = 0; j < matrix.length; ++j) {
            if(matrix[i][j] === 0) {
               matrix[0][j] = 0;
               matrix[i][0] = 0;
            }
        }
    }

    for(let i = 0; i < matrix.length; ++i) {
        for(let j = 0; j < matrix.length; ++j) {
            if(matrix[0][j] === 0 || matrix[i][0] === 0) {
               matrix[i][j] = 0;
            }
        }
    }

    return;
}