//A

const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

let findSpiderMan = superheroes.find(({ name }) => name === 'Spiderman');

console.log(findSpiderMan);

//B

let numberArray = [1, 2, 3];
let newArray  = [];

let doubleArrayValues = () => {

for (i= 0; i < numberArray.length; i++) {
    newArray.push(numberArray[i] * 2);
}

return newArray;
}

console.log(doubleArrayValues());

// C

let containsNumberBiggerThan10 = ([]) => {
    [].some((number) =>{
    return number > 10;
});
}
console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));

let array = [1,2,1,2,1,2];

let biggerThanTen = array.some((number) =>{
    return number > 10;
})

console.log(biggerThanTen);