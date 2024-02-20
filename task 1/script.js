let obj1 = {
  name: "Person",
  age: 5,
}; // creating object 1

let obj2 = {
  age: 5,
  name: "Person",
}; // creating object 2

if (obj1 === obj2) {
  // comparing data without changing order
  console.log(" Both are Same! ");
} else {
  console.log(" Both are Different!");
}
// both object has same property only but in this method it will return a value as false so both are diff.

// this data is in jsobject so we have to convert into JSON, using stringify() method we can convert JSObject into JSON.

let Json1 = JSON.stringify(obj1);
let Json2 = JSON.stringify(obj2);
// console.log(Json1); // we can ensure the data was converted into JSON by console this

if (Json1 === Json2) {
  console.log(" Both are Same! ");
} else {
  console.log(" Both are Different!");
}
// still getting same O/p. so we have to parse the data and compare that

let data1 = JSON.parse(Json1);
let data2 = JSON.parse(Json2);

let data = data1 === data2;
if (data === true) {
  console.log(" Both are Same! ");
} else {
  console.log(" Both are Different!");
}

// still same OP lets compare the keys & values.

let key1 = Object.keys(obj1);
let key2 = Object.keys(obj2);
// console.log(key1);
let value1 = Object.values(obj1);
let value2 = Object.values(obj2);
// console.log(value1);
if (key1 === key2) {
  console.log("Keys same");
} else {
  console.log("keys Different");
}
// with values
if (value1 === value2) {
  console.log("values same!");
} else {
    console.log("values Different");
    
}
