let number2: number = 5;
let string2: string = 'hello';
let boolean2: boolean = true;
let object2: {name: string, age: number} = {name: 'John', age: 25};
let array2: number[] = [1, 2, 3];

console.log("Test 1: Is number equal to 5? I predict true.");
console.log(number2 == 5);

console.log("Test 2: Is string equal to 'world'? I predict false.");
console.log(string2 == 'world');

console.log("Test 3: Is boolean equal to false? I predict false.");
console.log(boolean == false);

console.log("Test 4: Is object equal to {name: 'John', age: 25}? I predict true.");
console.log(object2.name == 'John' && object2.age == 25);

console.log("Test 5: Is array length greater than 3? I predict true.");
console.log(array2.length > 3);

console.log("Test 6: Is number not equal to 5? I predict false.");
console.log(number2 != 5);

console.log("Test 7: Is string length equal to 5? I predict true.");
console.log(string2.length == 5);

console.log("Test 8: Is boolean equal to true? I predict true.");
console.log(boolean == true);

console.log("Test 9: Is object property 'name' equal to 'Mary'? I predict false.");
console.log(object2.name == 'Mary');

console.log("Test 10: Is array length less than or equal to 2? I predict false.");
console.log(array2.length <= 2);
