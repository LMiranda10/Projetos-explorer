let studentList = [];
let index = 0

studentList = [
    {
        Name: 'Luan',
        nota1 : 3,
        nota2 : 5,
    },

    {
        Name: 'Joao',
        nota1 : 10,
        nota2 : 7,
    },

    {
        Name: 'Julia',
        nota1 : 9,
        nota2 : 10,
    },

    {
        Name: 'Tiago',
        nota1 : 10,
        nota2 : 6,
    },
]


for(index = 0; index < 4; ) {
    let media = (((studentList[index].nota1 + studentList[index].nota2) / 2))

    if(media < 7){
        alert(`O aluno ${studentList[index].Name} está REPPROVADO`)
    } else {
        alert(`O aluno ${studentList[index].Name} está APROVADO`)
    }

    index++
}
