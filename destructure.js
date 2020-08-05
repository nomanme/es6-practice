const person = { name: 'Jack William', age: 30, job: 'facebooker', gfName: 'Ema Watson', address: 'Kochu Khet', friends: ['Tom Hanks', 'Tom cruise', 'Tom yarn'], phone: 02933573 };
const { phone, gfName, salary, address } = person;

const complexObject = {
    name: 'ABC';
    info: {
        address: 'Kola Bagan',
        leader: 'Fatra Khan'
    }
}

const { leader } = complexObject.info;
// const gfName = person.gfName
// const phone = person.phone;
// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary, address);

const friends = ['sakib khan', 'arman khan', 'salman khan', 'arbaz khan', 'imran khan'];
const [chotoFriend, ...olderF] = friends;

console.log(olderF);