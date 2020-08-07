const students= [
    {id: 21, name: 'Omar Sani'},
    {id: 31, name: 'Manna Dey'},
    {id: 41, name: 'Moyuri'},
    {id: 71, name: 'Deepjol'}
];

const id= students.map( s=> s.id);
console.log(id);
const names= students.map( s=> s.name);
console.log(names);
const bigger= students.filter( s=> s.id>40);
const biggerOne= students.find (s => s.id>40);
console.log(bigger);
console.log(biggerOne);