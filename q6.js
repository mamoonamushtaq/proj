const personName = ' \t Ayesha  \n Fatima  ';
console.log(personName);
console.log(personName.replace(/\s/g,''));
console.log(personName.replace(/\s/g,' ').trim().replace(/\s+/g,' '));