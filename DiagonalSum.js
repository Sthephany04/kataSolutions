/* diagonals( [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
] ); */
// returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7 

const sum = (matrix) => {
  let sumDiagonal = 0;
  let j = 0;
  let x = matrix.length - 1;  
  for(let i = 0; i < matrix.length; i++) {    
    sumDiagonal += (matrix[i][j] + matrix[i][x]);
    j += 1;    
    x -= 1;
  }
  return sumDiagonal
}