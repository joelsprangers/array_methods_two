// A

const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

let findSpiderMan = superheroes.find(({ name }) => name === 'Spiderman');

console.log(findSpiderMan);

// B

let numberArray = [1, 2, 3];
let newArray = [];

let doubleArrayValues = () => {

    for (i = 0; i < numberArray.length; i++) {
        newArray.push(numberArray[i] * 2);
    }
    return newArray;
}

console.log(doubleArrayValues());

// C

let array = [1, 2, 1, 2, 1, 2];

let containsNumberBiggerThan10 = array.some((number) => {
    return number > 10;
})

console.log(containsNumberBiggerThan10);

array.push(12);

let biggerThanTen = array.some((number) => {
    return number > 10;
})

console.log(biggerThanTen);

// D

let countryNames = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'];

const isItalyInTheGreatSeven = countryNames.includes("Italy");

console.log(isItalyInTheGreatSeven);

// E

let numberList = [1, 4, 3, 6, 9, 7, 11];

const tenFold = function () {
    numberList.forEach(element => {
        numberList.push(element * 10);
    });
    numberList.splice(0, (numberList.length / 2));
    return numberList;
}

console.log(tenFold());

// F

let bigNumberList = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
let sumOfNumbers = 0;

let bigSum = () => {
  
    for (i = 0; i < bigNumberList.length; i++) {
        sumOfNumbers = bigNumberList[i] + sumOfNumbers;
    }
    return sumOfNumbers;
}

const total = bigNumberList.reduce((currentTotal, number) => {
    return number + currentTotal;
}, 0);

console.log(bigSum());
console.log(total);



// result should be 1118






