const utils = require("./utils.js")
let mat1 = [
    [1,2],
    [3,4]
]

let mat2 = [
    [2,3],
    [4,5]
]

let mat3 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(utils.matrixProduct(mat1,mat2));
console.log(utils.sumOfMatrices(mat3,mat3));
console.log(utils.sumofEachRow(mat3));