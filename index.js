1;

/* Use a normal 'for loop' to loop over the people array and do the following:

- If the objects 'name' value is "Otto", do not do any of the changes below to 
  that object (hint: the 'continue' keyword)

- Make a new key on each person object in the array called "city" and set the 
	value to a random city from the cities array.

- Make a new key on each person object called "title" and set it to "Mr." for
	males and "Ms." for females.
	
- Increment the age by 2

- Add "coding" to the beginning of the hobby array on each object.



PS: Use only 1 loop to do the above steps.

console.log(people) after your loop to check that your changes are correct.

EXTRA CREDIT (not mandatory): Use your loop to also calculate the combined 
age of all the people objects and store it in the combinedAge variable.

Then, after the loop, use the combined age to calculate the average age
of everyone and store it in the averageAge variable.

Do your calculations AFTER you add the two years to the ages, and remember,
skip Otto!

******************************************************************************/

// const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

// const people = [
//   {
//     name: "Thomas",
//     male: true,
//     age: 23,
//     hobbies: ["cycling", "football", "pool"],
//   },
//   {
//     name: "Susan",
//     male: false,
//     age: 26,
//     hobbies: ["jogging", "travelling", "dancing"],
//   },
//   {
//     name: "Monica",
//     male: false,
//     age: 21,
//     hobbies: ["skateboarding", "guitar", "concerts"],
//   },
//   {
//     name: "Avery",
//     male: true,
//     age: 28,
//     hobbies: ["writing", "games", "memes"],
//   },
//   {
//     name: "Phillip",
//     male: true,
//     age: 24,
//     hobbies: ["boxing", "wrestling", "mma"],
//   },
//   {
//     name: "Otto",
//     male: true,
//     age: 36,
//     hobbies: ["movies", "cinema", "music"],
//   },
//   {
//     name: "Annabelle",
//     male: false,
//     age: 30,
//     hobbies: ["makeup", "fashion", "shopping"],
//   },
//   {
//     name: "Cathy",
//     male: false,
//     age: 18,
//     hobbies: ["design", "drawing", "css"],
//   },
// ];
// let combinedAge = 0;

// for (let i = 0; i < people.length; i++) {
//   if (people[i] === "Otto") {
//     continue;
//   }
//   people[i].city = cities[Math.floor(Math.random() * cities.length)];

//   people[i].age = people[i].age + 2;

//   people[i].title = people[i].male ? "Mr" : "Mrs";

//   people[i].hobbies.unshift("coding");

//   combinedAge += people[i].age;
//   console.log(combinedAge);
// }

// console.log(people);
// let averageAge = combinedAge / people.length;
// console.log(averageAge);

/******************************************************************************
2.

Complete the function below:

It should take in 1 number as a parameter.

The function should return an array of random numbers between 1 and 6, the 
length of the array is decided by the number the function receives as a 
parameter (think of it as the number of dice we roll)

Examples: 
diceRoller(4) should return something like: [4, 1, 2, 6]
diceRoller(6) should return something like: [5, 5, 6, 2, 3, 4]

EXTRA CREDIT:
(This is not mandatory)
Add a second parameter to the function that decides how many faces the dice 
should have.
diceRoller(5, 20) should return an array of 5 random numbers ranging from 1-20 
******************************************************************************/

function diceRoller(rolls, sides) {
  let results = [];
  for (let i = 0; i < rolls; i++) {
    results.push(Math.floor(Math.random() * sides) + 1);
  }
  return results;
}
console.log(diceRoller(10, 20));
/******************************************************************************
3.

Complete the function below.

The function should take in 1 array of strings.

Inside the function, do this:

Write a loop that loops strings in the array, and does the following:
- Removes whitespace from the beginning and end of each word
- Converts all the words to lower case

Use a "FOR of" loop.

After the loop, use a method to join the array into a string with a single 
space between the words (" "), and return the resulting string.

Example:
[" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]
should return:
"this text needs to be cleaned up"
******************************************************************************/

function wordCleaner(arr) {
  let arr2 = [];
  for (let str of arr) {
    let str2 = str.trim().toLowerCase();
    arr2.push(str2);
  }
  return arr2.join(" ");
}

let arr = [" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"];
let result = wordCleaner(arr);
console.log(result);

/******************************************************************************
4.

EXTRA CREDIT:

(This assignment is not mandatory, only for those who want an extra challenge)

Complete the  function called 'helloChecker' that takes in 1 string 
as a parameter.

Write code that checks all the words in the string if they match the word for 
'hello' in any of these languages:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
czesc - polish

If any of the words in the string matches any of these, the function should 
return: "HELLO detected in (name of the language)."

If none of the words in the string match any of the words for hello in the 
different languages, your function should return: "No HELLO detected."

PS: Make sure the function is case insensitive, both 'Hello' and 'hello' 
should be detected.

I have provided some string variables to test your function with.
******************************************************************************/

/* const greetings = [
  { word: "hello", language: "english" },
  { word: "ciao", language: "italian" },
  { word: "salut", language: "french" },
  { word: "hallo", language: "german" },
  { word: "hola", language: "spanish" },
  { word: "czesc", language: "polish" },
];

const helloChecker = (str) => {
  let found = false;
  for (let greeting of greetings) {
    if (str.toLowerCase().includes(greeting.word)) {
      console.log(`"${greeting.word}" detected in ${greeting.language}`);
      found = true;
      break;
    }
  }
  if (!found) {
    console.log("No greeting detected.");
  }
};

helloChecker("Ciao"); */

const greetings = [
  { word: "hello", language: "english" },
  { word: "ciao", language: "italian" },
  { word: "salut", language: "french" },
  { word: "hallo", language: "german" },
  { word: "hola", language: "spanish" },
  { word: "czesc", language: "polish" },
];

const helloChecker = (str) => {
  for (let greeting of greetings) {
    if (str.toLowerCase().includes(greeting.word)) {
      return `${greeting.word} detected in ${greeting.language}`;
    }
  }
  return "No greeting detected.";
};

console.log(helloChecker("hallo"));
/******************************************************************************
5.

EXTRA CREDIT:

(This assignment is not mandatory, only for those who want an extra challenge)

Complete the function below to accomplish the following:

Return the string received in the first parameter with the 
following alterations:

any letter in the string matching charA (the second parameter in the function) 
will be replaced with charB (the third parameter) and VICE VERSA - meaning 
letters matching charA will be replaced with charB, and letters matching charB 
will be replaced with charA. See the expected console log comments below.

Examples:

doubleSwap("this is a string", "i", "s")
should return "thsi si a itrsng"

doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a")
should return "maybe another approach is necessary"

doubleSwap("what is the point of this?", "o", "t")
should return "whao is ohe ptino tf ohis?"
******************************************************************************/

function doubleSwap(str, charA, charB) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let currentchar = str[i];
    if (currentchar === charA) {
      result += charB;
    } else if (currentchar === charB) {
      result += charA;
    } else {
      result += currentchar;
    }
  }
  return result;
}

console.log(doubleSwap("This is a string", "i", "s"));
