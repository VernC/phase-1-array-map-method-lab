const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial.split(" ").map(word => {
        return word[0].toUpperCase() + word.slice(1)
        }
    ).join(" ")
  }) 
}











// const tutorials = [
//   'what does the this keyword mean?',
//   'What is the Constructor OO pattern?',
//   'implementing Blockchain Web API',
//   'The Test Driven Development Workflow',
//   'What is NaN and how Can we Check for it',
//   'What is the difference between stopPropagation and preventDefault?',
//   'Immutable State and Pure Functions',
//   'what is the difference between == and ===?',
//   'what is the difference between event capturing and bubbling?',
//   'what is JSONP?'
// ];
//copy and split the array word by word in a new tutorial
// const titleCased = tutorials.map((element) => `${element}`.split(" "))
// //capitalizes the first letter in each word
// function capitalLetter (titleCased) {
//  let i = 0; i < titleCased.length; i++ 
//     titleCased[i] = titleCased[i][0].toUpperCase() + titleCased[i].substr(1);
// }
// titleCased.join(" ")

// console.log(titleCased)
//identify the first letter of each word.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//copying the array into a second array and labeling it titleCased
// const titleCased = tutorials.map((element) => {
//   return `${element}`
// })
//split the array word by word
//identify the first letter of each word
//capitalize the first letter
//combine everything
//output it
// console.log(tutorials)

// //=============================================================
// function stringTitleCase(_string) {
//     let capitalizeLetterFunc = match => match.toUpperCase();
//     return _string.replace(/(^\w{1})|(\s{1}\w{1})/g, capitalizeLetterFunc);
// }
// let dummyString = 'test this is a versatile language';
// console.log(stringTitleCase(dummyString));
// //=============================================================
// const mySentence = "freeCodeCamp is an awesome resource";
// const words = mySentence.split(" ");

// const truth = words.map((word) => { 
//     return word[0].toUpperCase() + word.substring(1); 
// }).join(" ");
// console.log(truth)
// //============================================================
// const str = 'captain picard';

// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// const caps = str.split(' ').map(capitalize).join(' ');
// caps; // 'Captain Picard
// console.log(caps)
// //============================================================
// var a = ['this','is','test'];

// a.map(f=>{ return f.toUpperCase(); });
// //============================================================
// function titleCase(str) {
//   return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
// }


