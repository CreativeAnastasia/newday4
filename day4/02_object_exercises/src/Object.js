/*
  1. Create an obj with the key of "cat"
     and the value of "dog"
*/

var obj = {}

/*
  2. Create a property name boo on objy and give it the
     value of "moo"
*/

var objy;

// Add code below
// e.g. obj.hello = "foo"


/*
  3. Add a hello propery with a value
     of "hi"
*/

var niceObject = {};

/*
   4. Add the operator that makes the variable
      tyf evaluate to true

*/

var a = {"a": "a"};

var eh = {"a": "a"};

// Change code below:

var tyf = a > eh;


/*
   6. Are arrays objects?

*/

var sampleArray = [1,2,3];
var arrayObject = typeof sampleArray;

// Update code below
var isObject = arrayObject !== "object"

/*

  7. Dot vs bracket notation. What are zestyObject
     and spicyObject equal to?

*/

var zestyObject = {};
var spicyObject = {};

var bar = 2 + 2;

zestyObject.bar = "four"
spicyObject[bar] = "four"

//Replace "?" with correct values
var q = zestyObject[4] === "?"
var z = spicyObject[4] === "?"

/*
  8. Write a function named reverseProperties
     that switches all the keys and values in an
     object. For example
     reverseProperties({"a": "b"}) //=> {"b": "a"}
*/

function reverseProperties(obj) {
  // Add code here
  return
};

/*
  9. Write a function that returns an object
     where each key is a letter in an object with each
     property being the number of times that character occurs
     in the string. For example, getCharacterNumbers('aab')
     will return {"a": 2, "b": 2}. This functions takes a
     string type and returns an object.
*/


function getCharacterNumbers(str) {
  // Add code here
  return;
}


/*

  10. Make the variables rt, gt, vt and kt evaluate to true.

*/

var fakeCarDealerData = {
  "dealerId": 34,
  "cars": ["Mazda", "Toyota", "Hyundai"],
  "employees": {
    "managers": [
      {
        "name": "Steve",
        "role": "Car Manager"
      },
      {
        "name": "Bill",
        "role": "Floor Manager"
      }
    ],
    "interns": [
      {
        "name": "Sheila",
        "role": "Tech Intern"
      },
      {
        "name": "Barb",
        "role": "Car Intern"
      }
    ]
  }
}

// Replace "?" with correct values
var rt = fakeCarDealerData.dealerId === "?"
var vt = fakeCarDealerData.cars[2] === "?"
var gt = fakeCarDealerData.employees.managers[0].name === "?"
var kt = fakeCarDealerData.employees.interns.length === "?"
