function gradingStudents(grades) {
  return grades.map(oldGrade => {
    const diffToNext5 = 5 - (oldGrade % 5);
    if (diffToNext5 < 3 && oldGrade >= 38) {
      return oldGrade + diffToNext5;
    }
    return oldGrade;
  });
}
