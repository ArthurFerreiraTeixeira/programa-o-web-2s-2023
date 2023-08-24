function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      console.log(matrix[i].join('\t'));
    }
  }
  
  function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;
  
    if (colsA !== rowsB) {
      console.log("Não é possível calcular a multiplicação das matrizes. As dimensões são incompatíveis.");
      return null;
    }
  
    let matrixC = new Array(rowsA);
    for (let i = 0; i < rowsA; i++) {
      matrixC[i] = new Array(colsB);
      for (let j = 0; j < colsB; j++) {
        matrixC[i][j] = 0;
        for (let k = 0; k < colsA; k++) {
          matrixC[i][j] += matrixA[i][k] * matrixB[k][j];
        }
      }
    }
  
    return matrixC;
  }
  
  var matrixA = [
    [1, 2],
    [3, 4]
  ];
  
  var matrixB = [
    [5, 6],
    [7, 8]
  ];
  
  console.log("Matriz A:");
  printMatrix(matrixA);
  
  console.log("\nMatriz B:");
  printMatrix(matrixB);
  
  var matrixC = multiplyMatrices(matrixA, matrixB);
  if (matrixC) {
    console.log("\nResultado da multiplicação AxB (Matriz C):");
    printMatrix(matrixC);
  }