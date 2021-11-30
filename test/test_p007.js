
import { expect } from 'chai';
import { generateMatrix, rotateMatrix, Direction } from '../dist/p_007.js';

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

describe('Puzzle 7', () => {
    describe('#generateMatrix()', () => {
        it('Should throw an error if an invalid length is given to the function', () => {
            expect(() => {
                generateMatrix(-100);
            }).to.throw('Invalid length specified for matrix, must be >= 2');

            expect(() => {
                generateMatrix(1);
            }).to.throw('Invalid length specified for matrix, must be >= 2');
        });

        it('Should generate a matrix of proper size', () => {
            let matrix = generateMatrix(2);

            expect(matrix.length).to.equal(2);
            for(const row of matrix) {
                expect(row.length).to.equal(2);
            }

            matrix = generateMatrix(15);
            expect(matrix.length).to.equal(15);
            for(const row of matrix) {
                expect(row.length).to.equal(15);
            }
        });

        /* Since the matrix is fully randomized, I don't think there is much more 
           I could test here */
    });

    describe('#rotateMatrix()', () => {
        let myMatrix = [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']];

        it('Should throw an error if an empty, null, or undefined matrix were passed in', () => {
            expect(() => {
                rotateMatrix([], 100, Direction.CLOCKWISE);
            }).to.throw('Expecting valid matrix');

            expect(() => {
                rotateMatrix(null, 100, Direction.CLOCKWISE);
            }).to.throw('Expecting valid matrix');

            expect(() => {
                rotateMatrix(undefined, 100, Direction.CLOCKWISE);
            }).to.throw('Expecting valid matrix');
        });

        it('Should throw an error if supplied an invalid length argument', () => {
            expect(() => {
                rotateMatrix(myMatrix, -100, Direction.CLOCKWISE);
            }).to.throw('Invalid length specified for matrix, must be >= 2');

            expect(() => {
                rotateMatrix(myMatrix, 1, Direction.CLOCKWISE);
            }).to.throw('Invalid length specified for matrix, must be >= 2');
        });

        it('Should throw an error if an invalid direction is supplied', () => {
            expect(() => {
                rotateMatrix(myMatrix, 2, -5);
            }).to.throw('Unknown direction: -5');

            expect(() => {
                rotateMatrix(myMatrix, 2, 100);
            }).to.throw('Unknown direction: 100');
        });

        it('Should properly rotate a pre-defined matrix clockwise or counter-clockwise', () => {
            // A B C
            // D E F
            // G H I

            expect(matricesAreIdentical(myMatrix, [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']])).to.be.true;
            rotateMatrix(myMatrix, 3, Direction.CLOCKWISE);

            // G D A
            // H E B
            // I F C

            expect(matricesAreIdentical(myMatrix, [['G', 'D', 'A'], ['H', 'E', 'B'], ['I', 'F', 'C']])).to.be.true;
            rotateMatrix(myMatrix, 3, Direction.CLOCKWISE);

            // I H G
            // F E D
            // C B A

            expect(matricesAreIdentical(myMatrix, [['I', 'H', 'G'], ['F', 'E', 'D'], ['C', 'B', 'A']])).to.be.true;
            rotateMatrix(myMatrix, 3, Direction.CLOCKWISE);

            // C F I
            // B E H
            // A D G

            expect(matricesAreIdentical(myMatrix, [['C', 'F', 'I'], ['B', 'E', 'H'], ['A', 'D', 'G']])).to.be.true;
            rotateMatrix(myMatrix, 3, Direction.CLOCKWISE);

            // A B C
            // D E F
            // G H I

            expect(matricesAreIdentical(myMatrix, [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']])).to.be.true;

            rotateMatrix(myMatrix, 3, Direction.COUNTER_CLOCKWISE);
            expect(matricesAreIdentical(myMatrix, [['C', 'F', 'I'], ['B', 'E', 'H'], ['A', 'D', 'G']])).to.be.true;

            rotateMatrix(myMatrix, 3, Direction.COUNTER_CLOCKWISE);
            expect(matricesAreIdentical(myMatrix, [['I', 'H', 'G'], ['F', 'E', 'D'], ['C', 'B', 'A']])).to.be.true;

            rotateMatrix(myMatrix, 3, Direction.COUNTER_CLOCKWISE);
            expect(matricesAreIdentical(myMatrix, [['G', 'D', 'A'], ['H', 'E', 'B'], ['I', 'F', 'C']])).to.be.true;

            rotateMatrix(myMatrix, 3, Direction.COUNTER_CLOCKWISE);
            expect(matricesAreIdentical(myMatrix, [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']])).to.be.true;

        });
    });
});