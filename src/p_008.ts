
/* PUZZLE
   Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
   column are set to 0.
*/

export const zeroMatrix = (matrix : number[][]) : void => {
    if(!matrix || !matrix.length) throw new Error("Expecting valid matrix");

    let rows = [];
    let columns = [];

    for(let i = 0; i < matrix.length; ++i) {
        for(let j = 0; j < matrix.length; ++j) {
            if(matrix[i][j] === 0) {
                rows[i] = true;
                columns[j] = true;
            }
        }
    }

    for(let i = 0; i < matrix.length; ++i) {
        for(let j = 0; j < matrix.length; ++j) {
            if(rows[i] || columns[j]) {
                matrix[i][j] = 0;
            }
        }
    }

    return;
}