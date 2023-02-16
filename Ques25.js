var aliensToShoot1 = [];
for (var i = 0; i < 10; i++) {
    var r = Math.random();
    var color = r < 0.33 ? 'Green' : r > 0.67 ? 'Red' : 'Yellow';
    aliensToShoot1.push(color);
}
console.log(aliensToShoot1);
console.log('-----------');
for (var i = 0; i < 10; i++) {
    if (aliensToShoot1[i] == 'Green') {
        console.log('Shot the Green one at turn. Earned 5 points.');
    }
}
