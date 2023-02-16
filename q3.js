const name = 'John Smith';
const nameLowercase = name.toLowerCase();
const nameUppercase = name.toUpperCase();
const nameTitlecase= name.replace(/\b\w/g, (c) => c.toUpperCase());

console.log(`Name in lowercase: ${nameLowercase}`);
console.log(`Name in uppercase: ${nameUppercase}`);
console.log(`Name in title case: ${nameTitlecase}`);