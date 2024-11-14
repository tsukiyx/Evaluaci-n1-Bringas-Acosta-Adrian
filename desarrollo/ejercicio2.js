const okGrade = 11;
const maxGrade = 20;
const minGrade = 0;


const gradeChecker = studentGrade => {
  if (isNaN(studentGrade) || studentGrade < minGrade || studentGrade > maxGrade) {
    alert("Ingresa una nota válida");
  } else {
    const result = studentGrade >= okGrade 
      ? `El alumno aprobó con una calificación de ${studentGrade}` 
      : `El alumno reprobó con una calificación de ${studentGrade}`;
    return result;
  }
};

console.log(gradeChecker(11))
console.log(gradeChecker(5))
console.log(gradeChecker(10.5))
console.log(gradeChecker(11.2))
