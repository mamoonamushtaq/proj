var numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var ord;
for (var i = 0; i < numbers1.length; i++) {
    if (numbers1[i] === 1)
        ord = "".concat(numbers1[i], "st");
    else if (numbers1[i] === 2)
        ord = "".concat(numbers1[i], "nd");
    else if (numbers1[i] === 3)
        ord = "".concat(numbers1[i], "rd");
    else
        ord = "".concat(numbers1[i], "th");
    console.log(ord);
}
