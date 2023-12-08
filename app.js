// Exercise no 3.1

let list = ["Milk", "Bread", "Apples"];
// console.log(list.length);
list[1] = "Bananas";
// console.log(list);

// Exercise no 3.2
let shopping_list = [];
shopping_list.splice(0, 0, "Milk", "Bread", "Apples");
shopping_list[1] = "Bananas";
shopping_list.splice(2,0,"Eggs");
shopping_list.pop();
shopping_list.sort();

let findIndex = shopping_list.indexOf("Milk");
console.log(findIndex);

shopping_list.splice(1, 0, "Carrot", "Lettuce");
console.log(shopping_list);

let new_list = ["Juice", "Pop"];
let combine_list = shopping_list.concat (new_list);
let combine_list2 = combine_list.concat (new_list);
console.log(combine_list2);

let lastPop = combine_list2.lastIndexOf("Pop");
console.log(lastPop);

// exercise no 3.3

let arr=[1,2,3];
let arrOfArrays = [arr, arr, arr];
let arrOfArrays2 = [arrOfArrays, arrOfArrays, arrOfArrays];
let arrOfArrays3 = [arrOfArrays2, arrOfArrays2, arrOfArrays2];

let arrOfArraysOfArrays = [arrOfArrays, arrOfArrays2, arrOfArrays3];
console.log(arrOfArraysOfArrays);

let middleValue = arrOfArraysOfArrays[1][1][1];
console.log(middleValue);

// exercise no 3.4

let myCar = {
    make: "Toyota",
    model: "Land Cruiser",
    year: 2022,
    color: "Black",
    isAutomatic: true,
    forSale: true
};

let propertyName = "color";
myCar[propertyName] = "Blue";

propertyName = "forSale";
myCar[propertyName] = false;

console.log("Make: " + myCar.make);
console.log("Model: " + myCar.model);

console.log("For Sale: " + myCar.forSale);

// Exercise no 3.5
let people = {
    friends: []
};

var friend1 = {
    firstName: "Mahrukh",
    lastName: "Muhammad Waseem",
    id: 1
};

var friend2 = {
    firstName: "Eiman",
    lastName: "Murad Ali",
    id: 2
};

var friend3 = {
    firstName: "Mariyum",
    lastName: "Muhammad Rafiq",
    id: 3
};

people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);

console.log(people);

