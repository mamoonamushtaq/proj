const favouriteFruits = [];

for (let i=0; i<10; i++) {
    let r = Math.random()
    const fruit =  r < 0.2 ? 'Apple' : r < 0.4 ? 'Banana' : r < 0.6 ? 'Orange' : r < 0.8 ? 'Guava' : 'Mango';
    favouriteFruits.push(fruit);
}

console.log(favouriteFruits);
console.log('-----------');

for (let i=0; i<5; i++) {
    if (favouriteFruits[i] == 'Apple') {
        console.log(`I like ${favouriteFruits[i]}. Do you like it too?`);
    }

    if (favouriteFruits[i] == 'Banana') {
        console.log(`${favouriteFruits[i]} is sweet.`);
    }

    if (favouriteFruits[i] == 'Orange') {
        console.log(`Citrus ${favouriteFruits[i]} is a pleasure to eat. `);
    }

    if (favouriteFruits[i] == 'Guava') {
        console.log(`Very delicious ${favouriteFruits[i]}.`);
    }

    if (favouriteFruits[i] == 'Mango') {
        console.log(`King of fruits is ${favouriteFruits[i]}`);
    }

}