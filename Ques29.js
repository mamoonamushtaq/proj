var favouriteFruits1 = [];
for (var i = 0; i < 10; i++) {
    var r = Math.random();
    var fruit = r < 0.2 ? 'Apple' : r < 0.4 ? 'Banana' : r < 0.6 ? 'Orange' : r < 0.8 ? 'Guava' : 'Mango';
    favouriteFruits1.push(fruit);
}
console.log(favouriteFruits1);
console.log('-----------');
for (var i = 0; i < 5; i++) {
    if (favouriteFruits1[i] == 'Apple') {
        console.log("I like ".concat(favouriteFruits1[i], ". Do you like it too?"));
    }
    if (favouriteFruits1[i] == 'Banana') {
        console.log("".concat(favouriteFruits1[i], " is sweet."));
    }
    if (favouriteFruits1[i] == 'Orange') {
        console.log("Citrus ".concat(favouriteFruits1[i], " is a pleasure to eat. "));
    }
    if (favouriteFruits1[i] == 'Guava') {
        console.log("Very delicious ".concat(favouriteFruits1[i], "."));
    }
    if (favouriteFruits1[i] == 'Mango') {
        console.log("King of fruits is ".concat(favouriteFruits1[i]));
    }
}
