var nameVar = 'Cristian';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet',nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName(petName) {
    return petName;
}
// Block scoping

var fullName = 'Cristian Moyano';

let firstName;
let lastName;
if (fullName){
    firstName = fullName.split(' ')[0]
    lastName = fullName.split(' ')[1]
    console.log(firstName)
}

console.log(firstName)
console.log(lastName)