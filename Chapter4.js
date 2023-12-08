//  Exercise 4.1
// let myVariable = true;
// console.log("Value of myVariable: " + myVariable);

// if (myVariable) {
//     console.log("myVariable is true!");
// }

// if (!myVariable) {
//     console.log("myVariable is not true!");
// } else {
//     console.log("myVariable is true (using else)!");
// }

// myVariable = !myVariable;

// console.log("Value of myVariable (after changing): " + myVariable);

// if (myVariable) {
//     console.log("myVariable is true (after changing)!");
// } else {
//     console.log("myVariable is not true (after changing)!");
// }

// Exercise 4.2

// let userAge = prompt("Please enter your age:");
// userAge = Number(userAge);

// let message;

// if (userAge >= 21) {
//     message = "You are confirmed for entry to the venue and can purchase alcohol.";
// } 

// else if (userAge >= 19) {
//     message = "You are confirmed for entry to the venue but cannot purchase alcohol.";
// } 
// else {
//     message = "You are denied entry to the venue.";
// }

// console.log(message);

// Exercise no 4.3

// let isValidID = true; 

// let mesg = isValidID ? "You are allowed into the venue." : "You are not allowed into the venue.";

// console.log(mesg);

//  Exercise no 4.4

// let randomValue = Math.floor(Math.random() * 6); // Generates a random number between 0 and 5

// let userQuestion = prompt("Ask the Magic 8-Ball a question:");

// let response;
// switch (randomValue) {
//     case 0:
//         response = "It is certain.";
//         break;
//     case 1:
//         response = "Reply hazy, try again.";
//         break;
//     case 2:
//         response = "Don't count on it.";
//         break;
//     case 3:
//         response = "Signs point to yes.";
//         break;
//     case 4:
//         response = "Outlook not so good.";
//         break;
//     case 5:
//         response = "My sources say no.";
//         break;
//     default:
//         response = "Sorry, I cannot predict that now.";
//         break;
// }

// let finalResponse = "You asked: " + userQuestion + "\nMagic 8-Ball says: " + response;

// console.log(finalResponse);

// Exercise no 4.5

let prize = prompt("Select a number between 0 and 10 for a chance to win a prize:");

prize = parseInt(prize);


let myMessage = "My Selection: ";

let prizeResponse;
switch (prize) {
    case 0:
        prizeResponse = "Congratulations! You've won a brand new car!";
        break;
    case 1:
        prizeResponse = "Congratulations! You've won a brand new Laptop!";
        break;
    case 2:
        prizeResponse = "Congratulations! You've won a 5000/Rs for shopping!";
        break;
    case 4:
        prizeResponse = "Congratulations! you've won 10000/Rs for shopping ";
        break;
    case 7:
        prizeResponse = "Congratulations! you've won a free Umrah Ticket";
        break;
    default:
        prizeResponse = "Sorry, you didn't win a prize this time. Better luck for next time!";
}


console.log("\n", myMessage + prizeResponse);

