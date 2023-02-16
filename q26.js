
const aliensToShoot = [];

for (let i=0; i<10; i++) {
    let r = Math.random()
    const color =  r < 0.33 ? 'Green' : r > 0.67 ? 'Red' : 'Yellow';
    aliensToShoot.push(color);
}

console.log(aliensToShoot);
console.log('-----------');

for (let i=0; i<10; i++) {
    if (aliensToShoot[i] == 'Green') {
        console.log(`Shot the Green one at turn ${i+1}. Earned 5 points.`);
    } else {
        console.log(`Shot the Red/Yellow one at turn ${i+1}. Even better. Earned 10 points.`);
    }
}