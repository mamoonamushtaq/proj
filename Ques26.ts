const aliensToShoot1: string[] = [];

for (let i=0; i<10; i++) {
    let r = Math.random();
    const color: string = r < 0.33 ? 'Green' : r > 0.67 ? 'Red' : 'Yellow';
    aliensToShoot1.push(color);
}

console.log(aliensToShoot1);
console.log('-----------');

for (let i=0; i<10; i++) {
    if (aliensToShoot1[i] === 'Green') {
        console.log(`Shot the Green one at turn ${i+1}. Earned 5 points.`);
    } else {
        console.log(`Shot the Red/Yellow one at turn ${i+1}. Even better. Earned 10 points.`);
    }
}
