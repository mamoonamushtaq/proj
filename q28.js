const ageOfPerson = Math.round(Math.random() * 100);

console.log(ageOfPerson);

if (ageOfPerson < 2) console.log(`That is a baby at ${ageOfPerson} years of age.`);
else if (ageOfPerson >= 2 && ageOfPerson < 4) console.log(`That is a toddler at ${ageOfPerson} years of age.`);
else if (ageOfPerson >= 4 && ageOfPerson < 13) console.log(`That is a kid at ${ageOfPerson} years of age.`);
else if (ageOfPerson >= 13 && ageOfPerson < 20) console.log(`That is a teenager at ${ageOfPerson} years of age.`);
else if (ageOfPerson >= 20 && ageOfPerson < 65) console.log(`That is an adult at ${ageOfPerson} years of age.`);
else if (ageOfPerson >= 65) console.log(`The person is an elder at ${ageOfPerson} years of age.`);
