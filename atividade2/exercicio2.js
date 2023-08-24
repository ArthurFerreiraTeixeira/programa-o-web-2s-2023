function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      console.log(matrix[i].join('\t'));
    }
  }
  
  var matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log("Matriz A:");
  printMatrix(matrixA);
  
  var transposeA = [];
  for (let i = 0; i < matrixA[0].length; i++) {
    transposeA[i] = [];
    for (let j = 0; j < matrixA.length; j++) {
      transposeA[i][j] = matrixA[j][i];
    }
  }
  
  console.log("\nMatriz Transposta de A:");
  printMatrix(transposeA);