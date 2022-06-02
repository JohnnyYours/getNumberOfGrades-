/* classroom.js */

/** @param {number[]} grades */
/** @param {number[]} grades */
export const getNumberOfGrades = grades => {
  return grades.length;
}

/** @param {number[]} grades */
export const getSumGrades = grades => {
   return grades.reduce((a, b) => a + b, 0);
}

/** @param {number[]} grades */
export const getAverageValue = grades => {
   return getSumGrades(grades) / grades.length;
}

/** @param {number[]} grades */
export const getPassingGrades = grades => {
   return grades.filter(grade => grade >= 10); 
}

/** @param {number[]} grades */
export const getFailingGrades = grades => {
   return grades.filter(grade => grade < 10); 
}

/** @param {number[]} grades */
export const getRaisedGrades = grades => {
   return grades.map(grade => grade + 1).filter(grade => grade <= 20);
}