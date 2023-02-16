var guests = ['Baby Mahnoor', 'Aapi Areeba', 'Aneela'];
console.log("Hi ".concat(guests[0], ". \nHope this message finds you in good health. \nHey, we are organizing our baby's 5th birthday this wekend on Sunday at 06:00 pm.\nYou are invited to attend your friend's birthday party with Mom and Pop. Please come and we'll enjoy.\nBaby Abeel's Mom.\n"));
console.log("Assalam o alaikum ".concat(guests[1], "!\nI hope and pray that you are fine by grace of Allah.\nWe'll be having a birthday party on next Friday for . \nI am writing this to invite you to my birthday party this Friday.\nPlease join us to wish the little baby.\nBaby Abeel Family.\n"));
console.log("Good morning ".concat(guests[2], ", \nI am writing this to invite you to the birthday party for baby Abeel.\nAwaiting your confirmation.\nThanks.\nAbeel and Family.\n"));
console.log("---------------------------------------------------------------------------------\n");
console.log("".concat(guests[2], " will not be able to make it to the party."));
console.log("---------------------------------------------------------------------------------\n");
var newGuest3 = 'Haroon';
guests[2] = newGuest3;
console.log("Reminder... \nHi ".concat(guests[0], ", there is a party on Friday.\n"));
console.log("Reminder... \nHi ".concat(guests[1], ", there is a party on Friday.\n"));
console.log("Good morning ".concat(guests[2], ", \nI am writing this to invite you to the birthday party for baby Abeel.\nEven though not much time is left. Still hoping that you will make it.\nThanks.\nBaby Abeel and Family.\n"));
console.log("---------------------------------------------------------------------------------\n");
console.log("Hi all, we now have more guests coming as we have arranged bigger table for the party.");
console.log("---------------------------------------------------------------------------------\n");
// beginning
guests.unshift('Abrar');
// middle
guests.splice(2, 0, 'Zanjabeel');
Array.prototype.append = function (item) {
    this.push(item);
};
// end
guests.append('Izna');
console.log(guests);
console.log("---------------------------------------------------------------------------------");
for (var i = 0; i < guests.length; i++) {
    console.log("\nGood morning ".concat(guests[i], ", \nI am writing this to invite you to the birthday party for baby Abeel.\nPlease join us in this auspicious occasion.\nThanks.\nBaby Abeel and Family.\n"));
}
console.log("---------------------------------------------------------------------------------\n");
