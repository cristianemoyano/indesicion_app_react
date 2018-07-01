const square = function (x) {
    return x * x;
};

// const squareArrow = (x) => {
//     return x*x;
// };

const squareArrow = (x) => x*x;

console.log(square(8))
console.log(squareArrow(8))

const getFirstName = (fullname) => fullname.split(' ')[0];
let fullName = 'Mike Moyano'
console.log(getFirstName(fullName))