module.exports = function countCats(matrix) {

  let count = 0;
  for (let i = 0; i < matrix.length; i++) { 
    let sym = matrix[i];
    for (let j = 0; j < sym.length ; j++) { 
      if( sym[j] == '^^')  {
        count++;
      }                  
    }   
  }
    return count; 
};
