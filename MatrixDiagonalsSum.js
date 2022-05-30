var diagonalSum = function(mat) {
  let len=mat.length-1;
  let sum=0;
  for(let i=0;i<mat.length;i++){
      sum+=mat[i][i]+mat[i][len-i]
  }
  if(len %2 === 0) sum-=mat[len/2][len/2];
  return sum;
};