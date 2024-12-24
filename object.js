// let parson={
//     firstName:'Julykha',
//     seconName:'Bugum',
//     age:29

// }
// let userName=person.firstName;
// let Name=person.seconName;
// console.log(nam)

// let employee = {
//     name:'sumi',
//     age:29,
//     skill: {
//         Skill1:{
//             courseName:'DIgitalmarketing',
//             duration:'6month'
//         },
//         skill2:{
//             courseName:'callcenter',
//             duration:'6month'
//         }
//     }       
// };
// console.log(employee.skill1);
const users = [
    {
        id : 1,
        Name : 'Alise Jhonson',
        Age : 25,
        email: 'alish@gmail.com',
        phone: "98874874",
        address: {
            street : '123 main st',
            city: "New York",
            state: 'NY',
            zip: '10001'
        },
        occupation: "software engineer",
        hobbies: ["reading", "travelling", "coading"],

    }
]
console.log(users[0].address.city);
