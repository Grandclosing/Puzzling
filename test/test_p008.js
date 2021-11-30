
import { expect } from 'chai';
import { zeroMatrix } from '../dist/p_008.js';

function matricesAreIdentical(matrixA, matrixB) {
    if(!matrixA || !matrixB) return false;
    if(matrixA.length != matrixB.length) return false;

    for(let i = 0; i < matrixA.length; ++i) {
        if(matrixA[i].length != matrixB[i].length) return false;

        for(let j = 0; j < matrixA[i].length; ++j) {
            if(matrixA[i][j] !== matrixB[i][j]) return false;
        }
    }

    return true;
}

describe('Puzzle 8', () => {
    describe('#zeroMatrix()', () => {
        let myMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        let myMatrixCopy = [];

        // deep copy 
        myMatrix.forEach((row, index) => { myMatrixCopy[index] = [...row] } );

        it('Should throw an error if an empty, null, or undefined matrix is supplied', () => {
            expect(() => {
                zeroMatrix([]);
            }).to.throw('Expecting valid matrix');

            expect(() => {
                zeroMatrix(null);
            }).to.throw('Expecting valid matrix');

            expect(() => {
                zeroMatrix(undefined);
            }).to.throw('Expecting valid matrix');
        });

        it('Should leave matrices without zero nodes perfectly intact', () => {
            zeroMatrix(myMatrix);

            expect(matricesAreIdentical(myMatrix, myMatrixCopy)).to.be.true;
        });

        it('Should properly zero out the rows and columns of a matrix with nodes containing zero', () => {
            myMatrix[0][1] = 0;
            expect(matricesAreIdentical(myMatrix, [[1, 0, 3], [4, 5, 6], [7, 8, 9]])).to.be.true;

            zeroMatrix(myMatrix);
            expect(matricesAreIdentical(myMatrix, [[0, 0, 0], [4, 0, 6], [7, 0, 9]])).to.be.true;
        });
    });
});