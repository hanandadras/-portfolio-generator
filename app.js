var commandLineArgs = process.argv;
console.log(commandLineArgs);
var profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);
const message = 'Hello Node!';
message = 'Goodbye Node!';

const sum = 5 + 3;
sum += 1;

const animalArray = ['dog', 'cat', 'pig'];

animalArray.push('cow');

const personObj = {
  name: 'Lernantino',
  age: 99
};

personObj.age = 100;
personObj.occupation = 'Developer';
var profileDataArgs = process.argv.slice(2, process.argv.length);
const printProfileData = (profileDataArr) => {
    console.log(profileDataArr);
  };
  
  printProfileData(profileDataArgs);

  Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
      console.log(profileDataArr[i]);
    }
  };
let message = 'Hello Node!';
message = 'Hello ES6!';

let sum = 5 + 3;
sum += 1;

const message = 'Hello Node!';

if (true === true) {
  const message = 'Hello ES6!';
  let sum = 5;
  sum += 10;
  console.log(message);
  console.log(sum);
}

console.log(message);
console.log(sum);

const printProfileData = profileDataArr => {
   /* this is the same as*/
    for (let i = 0; i < profileDataArr.length; i += 1) {
      console.log(profileDataArr[i]);
    }
  
    console.log('================');
  
   /*this*/
    profileDataArr.forEach((profileItem) => {
      console.log(profileItem)
    });
  };

const printProfileData = profileDataArr;
profileDataArr.forEach(profileItem => console.log(profileItem));