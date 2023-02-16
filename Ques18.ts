const locations1: string[] = ['Northern Areas of Pakistan', 'Amazon', 'Lake Baikal', 'Antarctica', 'Black Forest'];
console.log(locations);

console.log(Array.from(locations).sort());
console.log(locations);

console.log(Array.from(locations).sort((a,b) => {return a<b?1:a>b?-1:0}));
console.log(locations);

console.log(locations.reverse());
console.log(locations.reverse());

console.log(locations.sort());
console.log(locations.sort((a,b) => {return a<b?1:a>b?-1:0}));