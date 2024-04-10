const students = [
    {
        name: "Ana",
        firstTest: 8,
        secondTest: 6,
    },
    {
        name: "Daniel",
        firstTest: 4,
        secondTest: 7,
    },
    {
        name: "Lucas",
        firstTest: 5,
        secondTest: 4,
    },
    {
        name: "Beatriz",
        firstTest: 6,
        secondTest: 4,
    }
]

for (let student of students) {
    let average = (Number(student.firstTest) + Number(student.secondTest)) / 2
    let result = average >= 7
    average = average.toFixed(2)
    
    if (result) {
        alert(`A média do aluno(a) ${student.name} é ${average}.\n Parabéns, ${student.name}! Você foi aprovado(a) no concurso.`)
    } else {
        alert(`A média do aluno(a) ${student.name} é ${average}.S\n Não foi dessa vez, ${student.name}. Tente novamente.`)
    }
}
    
