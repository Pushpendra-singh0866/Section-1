const user = {
    name : 'Lestrade',
    email : 'Lestrade@gmail.com',
    age : 45
}

console.log(user);

console.log(user.email);
console.log(user['name']);

user.address = 'Lucknow';
console.log(user);

user.age = 20;

console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
delete user.address;
console.log(user);

const smartphone = {
    brand : 'vivo',
    model : 't2pro',
    price : 25000,
    colors : ['black', 'white', 'blue']
};

console.log(smartphone.colors[0]);