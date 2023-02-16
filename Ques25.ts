const aliensToShoot2: string[] = [];

for (let i=0; i<10; i++) {
let r = Math.random()
const color = r < 0.33 ? 'Green' : r > 0.67 ? 'Red' : 'Yellow';
aliensToShoot2.push(color);
}

console.log(aliensToShoot2);
console.log('-----------');

for (let i=0; i<10; i++) {
if (aliensToShoot2[i] == 'Green') {
console.log('Shot the Green one at turn. Earned 5 points.');
}
}