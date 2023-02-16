
const numbers = [1,2,3,4,5,6,7,8,9];
for (let i=0; i<numbers.length; i++) {
    if (numbers[i] == 1) ord = `${numbers[i]}st`;
    else if (numbers[i] == 2) ord = `${numbers[i]}nd`;
    else if (numbers[i] == 3) ord = `${numbers[i]}rd`;
    else ord = `${numbers[i]}th`;
    console.log(ord);
}