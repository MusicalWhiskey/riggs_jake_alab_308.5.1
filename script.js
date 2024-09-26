console.log('========ALAB_308.5.1=========');
console.log('----------Part 1-a----------');

const arr = [1, 2, 3, 4, 5];

let sum = 0;
let average = 0;

function sumArray (arr) {
    for (i = 0; i<arr.length; i++) {
        sum += arr[i];
        // average = sum / arr.length;
    }
    return sum;
}
console.log(sumArray(arr));
console.log('----------Part 1-b----------');
function averageArray (arr) {
    for (i = 0; i < arr.length; i++) {
        average = sum / arr.length;
    }
    return average;
}
console.log(averageArray(arr));
console.log('----------Part 1-c----------');
const stringArr = ['apple', 'banana', 'cherry'];
let longestString = '';
function findLongestString(stringArr) {
for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i].length > longestString.length) {
       longestString = stringArr[i];
    }
}
return longestString;
}
console.log(findLongestString(stringArr));
console.log('----------Part 1-d----------');
let newArr = ['say', 'hello', 'in', 'the', 'morning']
const numberLength = 3;
let answerArr = [];
stringsLongerThan(newArr);

function stringsLongerThan(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > numberLength){
            answerArr.push(arr[i]);
        }
    }
}
console.log(answerArr);
console.log('----------Part 1-e----------');
function showNumbers(n) {
    if (n <= 0) {
        return; 
    }
    console.log(n);
    
    showNumbers(n - 1);
}

const n = 10;
showNumbers(n);
//======================================
console.log('----------Part 2-a----------');
const arrObject = [
    
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
    { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

arrObject.sort((a, b) => (a.age) - (b.age));

console.log(arrObject);
//===============================================

console.log('----------Part 2-b----------');


console.log('----------Part 2-c----------');
console.log('----------Part 2-d----------');
console.log('----------Part 3-a----------');
console.log('----------Part 3-b----------');
console.log('----------Part 4----------');
console.log('----------Part 5-a----------');
console.log('----------Part 5-b----------');
console.log('----------Part 5-c----------');
console.log('----------Part 5-d----------');