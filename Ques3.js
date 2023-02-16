newFunction();
function newFunction() {
    var name = 'John Smith';
    var nameLowercase = name.toLowerCase();
    var nameUppercase = name.toUpperCase();
    var nameTitlecase = name.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
    console.log("Name in lowercase: ".concat(nameLowercase));
    console.log("Name in uppercase: ".concat(nameUppercase));
    console.log("Name in title case: ".concat(nameTitlecase));
}
