console.log("----------------------------------");
let marks: number[] = [90, 100, 80];
console.log("marks = [90, 100, 80]");
console.log("Does marks array [90, 100, 80] has 4 elements? I predict false.");
console.log(marks.length == 4);

console.log("----------------------------------");
let number: number = 99;
console.log("number = 99");
console.log("Is number < 100? I predict true.");
console.log(number < 100);

console.log("----------------------------------");
let name1: string = 'Asif';
console.log("name = 'Asif'");
console.log("Is name != 'Asif'? I predict false.");
console.log(name != 'Asif');

console.log("----------------------------------");
let car: string = 'cultus';
console.log("car = 'cultus'");
console.log("Is car == 'cultus'? I predict true.");
console.log(car == 'cultus');

console.log("----------------------------------");
let age: number = 70;
console.log("age = 70");
console.log("Is age > 70? I predict false.");
console.log(age > 70);

console.log("----------------------------------");
const classSize: number = 450;
console.log("classSize = 450");
console.log("Is classSize between 400 and 500? I predict true.");
console.log(classSize > 400 && classSize <= 500);

console.log("----------------------------------");
const userName1: string = 'AsifIqbal';
console.log("userName = 'AsifIqbal'");
console.log("Is 'AsifIqbal' == 'asifiqbal'? I predict false.");
console.log(userName1 == 'asifiqbal');

console.log("----------------------------------");
const userNames: string[] = ['AsifIqbal', 'AhmedKhan', 'MuhammadTalha'];
console.log("userNames = ['AsifIqbal', 'AhmedKhan', 'MuhammadTalha']");
console.log("Is 'AsifIqbal' in userNames? I predict true.");
console.log(userNames.includes('AsifIqbal'));

console.log("----------------------------------");
const topics: string[] = ['Virtual Reality', 'Augmented Reality', 'Mixed Reality'];
console.log("topics = ['Virtual Reality', 'Augmented Reality', 'Mixed Reality']");
console.log("Is 'Web 3.0' in metaverse topics? I predict false.");
console.log(topics.includes('Web 3.0'));

console.log("----------------------------------");
const subjects: string[] = ['Psychology', 'Software Engineering', 'Computer Science'];
console.log("subjects = ['Psychology', 'Software Engineering', 'Computer Science']");
console.log("Is there any subject related to Computer? I predict true.");
console.log(subjects.includes('Software Engineering') || subjects.includes('Computer Science'));