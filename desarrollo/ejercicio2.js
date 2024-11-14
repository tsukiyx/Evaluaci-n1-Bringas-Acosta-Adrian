const okGrade = 11;
const maxGrade = 20;
const minGrade = 0;

const studentGrade = parseFloat(prompt("Ingresa tu calificación"));

const gradeChecker = () => {
  if (isNaN(studentGrade) || studentGrade < minGrade || studentGrade > maxGrade) {
    alert("Ingresa una nota válida");
  } else {
    const result = studentGrade >= okGrade 
      ? `El alumno aprobó con una calificación de ${studentGrade}` 
      : `El alumno reprobó con una calificación de ${studentGrade}`;
    console.log(result);
  }
};

gradeChecker();

