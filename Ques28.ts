const ageOfPerson2: number = Math.round(Math.random() * 100);

console.log(ageOfPerson2);

if (ageOfPerson2 < 2) console.log(`That is a baby at ${ageOfPerson2} years of age.`);
else if (ageOfPerson1 >= 2 && ageOfPerson2 < 4) console.log(`That is a toddler at ${ageOfPerson2} years of age.`);
else if (ageOfPerson2 >= 4 && ageOfPerson2 < 13) console.log(`That is a kid at ${ageOfPerson2} years of age.`);
else if (ageOfPerson2 >= 13 && ageOfPerson2 < 20) console.log(`That is a teenager at ${ageOfPerson2} years of age.`);
else if (ageOfPerson2 >= 20 && ageOfPerson2 < 65) console.log(`That is an adult at ${ageOfPerson2} years of age.`);
else if (ageOfPerson2 >= 65) console.log(`The person is an elder at ${ageOfPerson2} years of age.`);
