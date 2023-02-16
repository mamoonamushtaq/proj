const aliensToShoot = [];

for (let i=0; i<10; i++) {
    let r = Math.random()
    const color =  r < 0.33 ? 'Green' : r > 0.67 ? 'Red' : 'Yellow';
    aliensToShoot.push(color);
}

console.log(aliensToShoot);
console.log('-----------');

for (let i=0; i<15; i++) {
    if (aliensToShoot[i] == 'Green') {
        console.log(`Shot the Green  one at turn ${String(i+1).padStart(2, '0')}. Earned 05 points.`);
    } else if (aliensToShoot[i] == 'Yellow') {
        console.log(`Shot the Yellow one at turn ${String(i+1).padStart(2, '0')}. Earned 10 points.`);
    } else {
        console.log(`Shot the Red    one at turn ${String(i+1).padStart(2, '0')}. Earned 15 points.`);
    }
}