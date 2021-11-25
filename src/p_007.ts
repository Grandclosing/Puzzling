
/* PUZZLE
   Given an image represented by an NxN matrix, where each pixel in the image is 4
   bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/

import {stdout} from 'process';

export enum Direction {
    CLOCKWISE,
    COUNTER_CLOCKWISE
}

// Returns a random capital letter 
function getAlpha() : number {
    return Math.floor((Math.random() * 26) + 65);
}

export const generateMatrix = (length : number) : number[][] => {
    if(length < 2) throw new Error('Invalid length specified for matrix, must be >= 2');

    let matrix : number[][] = [];
    for(let i = 0; i < length; ++i) {
        matrix[i] = [];

        for(let j = 0; j < length; ++j) {
            matrix[i][j] = getAlpha();
        }
    }

    return matrix;
}

export const printMatrix = (matrix : number[][]) : void => {
    for(let i = 0; i < matrix.length; ++i) {
        for(let j = 0; j < matrix[i].length; ++j) {
            stdout.write(`${String.fromCharCode(matrix[i][j])} `);
        }

        stdout.write("\n");
    }

    return;
}

export const rotateMatrix = (matrix : number[][], length : number, direction : Direction) : void => {
    if(!matrix) throw new Error("Expecting valid matrix");
    if(length < 2) throw new Error('Invalid length specified for matrix, must be >= 2');

    if(direction != Direction.CLOCKWISE && 
       direction != Direction.COUNTER_CLOCKWISE) {
        throw new Error(`Unknown direction: ${direction}`);
    }

    const end_idx = length - 1;
    let offset = 0;

    for(let i = 0; i < end_idx - offset; ++i) {
        for(let j = offset; j < end_idx - offset; ++j) {
            let sourceChar : number = matrix[i][j];
            let destChar : number;

            switch(direction) {
                case Direction.CLOCKWISE: 
                    destChar = matrix[j][end_idx - i];
                    matrix[j][end_idx - i] = sourceChar;
                    sourceChar = destChar;

                    destChar = matrix[end_idx - i][end_idx - j];
                    matrix[end_idx - i][end_idx - j] = sourceChar;
                    sourceChar = destChar;

                    destChar = matrix[end_idx - j][i];
                    matrix[end_idx - j][i] = sourceChar;
                    sourceChar = destChar;

                    destChar = matrix[i][j];
                    matrix[i][j] = sourceChar;

                    break;
                case Direction.COUNTER_CLOCKWISE:
                    destChar = matrix[end_idx - j][i];
                    matrix[end_idx - j][i] = sourceChar;
                    sourceChar = destChar;

                    destChar = matrix[end_idx - i][end_idx - j];
                    matrix[end_idx - i][end_idx - j] = sourceChar;
                    sourceChar = destChar;

                    destChar = matrix[j][end_idx - i];
                    matrix[j][end_idx - i] = sourceChar;
                    sourceChar = destChar;

                    destChar = matrix[i][j];
                    matrix[i][j] = sourceChar;
                    break;
                default: break; // this can't happen
            }
        }

        offset++;
    }
}