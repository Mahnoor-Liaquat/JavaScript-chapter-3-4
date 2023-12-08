const theList = ['Laurence', 'Svekis', true, 35, null, undefined, { test: 'one', score: 55 }, ['one', 'two']];

// Remove the first item and the last item.
theList.shift();
theList.pop();

// Add "FIRST" to the start of the array.
theList.unshift("FIRST");

// Assign "hello World" to the fourth item value.
theList[3] = "hello World";

// Assign "MIDDLE" to the third index value.
theList[2] = "MIDDLE";

// Add "LAST" to the last position in the array.
theList.push("LAST");

// Output the transformed array to the console.
console.log(theList);
