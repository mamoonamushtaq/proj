var ageOfPerson1 = Math.round(Math.random() * 100);
console.log(ageOfPerson1);
if (ageOfPerson1 < 2)
    console.log("That is a baby at ".concat(ageOfPerson1, " years of age."));
else if (ageOfPerson1 >= 2 && ageOfPerson1 < 4)
    console.log("That is a toddler at ".concat(ageOfPerson1, " years of age."));
else if (ageOfPerson1 >= 4 && ageOfPerson1 < 13)
    console.log("That is a kid at ".concat(ageOfPerson1, " years of age."));
else if (ageOfPerson1 >= 13 && ageOfPerson1 < 20)
    console.log("That is a teenager at ".concat(ageOfPerson1, " years of age."));
else if (ageOfPerson1 >= 20 && ageOfPerson1 < 65)
    console.log("That is an adult at ".concat(ageOfPerson1, " years of age."));
else if (ageOfPerson1 >= 65)
    console.log("The person is an elder at ".concat(ageOfPerson1, " years of age."));
