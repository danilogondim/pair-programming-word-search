const transpose = (matrix) => {
  const newArr = [];
  for (let row = 0; row < matrix[0].length; row++) {
    const newRow = [];
    for (let col = 0; col < matrix.length; col++) {
      newRow.push(matrix[col][row]);
    }
    newArr.push(newRow);
  }
  return newArr;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  if (!word) {
    return "You need to enter a word";
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  const lettersTransposed = transpose(letters);
  const verticalJoin = lettersTransposed.map(ls => ls.join(''));
  const diag1Join = buildDiagArr(letters);
  const diag2Join = buildDiagArr(lettersTransposed);
  const diag3Join = buildDiagArr(revertColumns(letters));
  const diag4Join = buildDiagArr(revertColumns(lettersTransposed));



  for (const l of horizontalJoin) {
    if (l.includes(word) || l.includes(word.split("").reverse().join(""))) {
      return true;
    }
  }
  for (const l of verticalJoin) {
    if (l.includes(word) || l.includes(word.split("").reverse().join(""))) {
      return true;
    }
  }
  for (const l of diag1Join) {
    if (l.includes(word) || l.includes(word.split("").reverse().join(""))) {
      return true;
    }
  }
  for (const l of diag2Join) {
    if (l.includes(word) || l.includes(word.split("").reverse().join(""))) {
      return true;
    }
  }

  for (const l of diag3Join) {
    if (l.includes(word) || l.includes(word.split("").reverse().join(""))) {
      return true;
    }
  }

  for (const l of diag4Join) {
    if (l.includes(word) || l.includes(word.split("").reverse().join(""))) {
      return true;
    }
  }

  return false;
};

const buildDiagArr = (matrix) => {
  const result = [];
  for (let y = 0; y < matrix.length; y++) {
    const subResult = [];
    for (let x = y; x < matrix.length; x++) {
      subResult.push(matrix[x][x - y]);
    }
    result.push(subResult.join(""));
  }
  return result;
};

const revertColumns = (matrix) => {
  const result = [];
  for (const row of matrix) {
    result.push(row.reverse());
  }
  return result;
};
// const testMatrix = [
//   ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//   ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//   ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//   ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//   ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ]
// console.log(testMatrix)
// console.log(revertColumns(testMatrix))



// console.log(buildDiagArr([
//   ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//   ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//   ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//   ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//   ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ]))

wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'SEINFELD');

module.exports = wordSearch;