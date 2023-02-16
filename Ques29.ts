const favouriteFruits2: string[] = [];

for (let i=0; i<10; i++) {
    let r = Math.random();
    const fruit =  r < 0.2 ? 'Apple' : r < 0.4 ? 'Banana' : r < 0.6 ? 'Orange' : r < 0.8 ? 'Guava' : 'Mango';
    favouriteFruits2.push(fruit);
}

console.log(favouriteFruits2);
console.log('-----------');

for (let i=0; i<5; i++) {
    if (favouriteFruits2[i] == 'Apple') {
        console.log(`I like ${favouriteFruits1[i]}. Do you like it too?`);
    }

    if (favouriteFruits1[i] == 'Banana') {
        console.log(`${favouriteFruits2[i]} is sweet.`);
    }

    if (favouriteFruits2[i] == 'Orange') {
        console.log(`Citrus ${favouriteFruits2[i]} is a pleasure to eat. `);
    }

    if (favouriteFruits2[i] == 'Guava') {
        console.log(`Very delicious ${favouriteFruits2[i]}.`);
    }

    if (favouriteFruits2[i] == 'Mango') {
        console.log(`King of fruits is ${favouriteFruits2[i]}`);
    }

}   
