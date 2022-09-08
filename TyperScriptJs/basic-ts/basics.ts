// to define type for array string
let names: string[];

// to define type of array number
let numbers: number[];

// to define type string
let person: string;

// to define type for object
// here we define the structure of object
let details: {
  name: string;
  age: number;
};

// to define array of objects
let Peopledetails: {
  name: string;
  age: number;
}[];

// type inference
// here typescript will automatically assume the type of course as string
let course = "JavaScript Fundamentals";
// and if we than store another value in course it will throw us error
// course = 123;

// union types: to define more than one type to the variable
let orgName: number | string;

// function and there types
// here return will have a infered type of number
// but we can also define type for return
// ---------------------------------the value after the colon(:) is type for return
function add(a: number, b: number): number {
  return a + b;
}

// here the function has no return value so the type of return will be void which is similar to null
function hello(value: any) {
  console.log(value);
}

// generic functions
function substract<Type>(arg: Type): Type {
  return arg;
}

const a = substract("hello");

function insert<Type>(array: Type[], value: Type) {
  const newArray = [...array, value];
  return newArray;
}

const arr = insert(["string", "lado", "chore"], "police");
