newFunction();

function newFunction() {
    const name: string = 'John Smith';
    const nameLowercase: string = name.toLowerCase();
    const nameUppercase: string = name.toUpperCase();
    const nameTitlecase: string = name.replace(/\b\w/g, (c: string) => c.toUpperCase());

    console.log(`Name in lowercase: ${nameLowercase}`);
    console.log(`Name in uppercase: ${nameUppercase}`);
    console.log(`Name in title case: ${nameTitlecase}`);
}
