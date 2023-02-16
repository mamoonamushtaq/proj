var aliensToShoot2 = [];
for (var i = 0; i < 10; i++) {
    var r = Math.random();
    var color = r < 0.33 ? 'Green' : r > 0.67 ? 'Red' : 'Yellow';
    aliensToShoot2.push(color);
}
console.log(aliensToShoot2);
console.log('-----------');
for (var i = 0; i < 10; i++) {
    if (aliensToShoot2[i] === 'Green') {
        console.log("Shot the Green one at turn ".concat(i + 1, ". Earned 5 points."));
    }
    else {
        console.log("Shot the Red/Yellow one at turn ".concat(i + 1, ". Even better. Earned 10 points."));
    }
}
