var aliensToShoot2 = [];
for (var i = 0; i < 10; i++) {
    var r = Math.random();
    var color = r < 0.33 ? 'Green' : r > 0.67 ? 'Red' : 'Yellow';
    aliensToShoot2.push(color);
}
console.log(aliensToShoot2);
console.log('-----------');
for (var i = 0; i < 15; i++) {
    if (aliensToShoot2[i] === 'Green') {
        console.log("Shot the Green  one at turn ".concat(String(i + 1).padStart(2, '0'), ". Earned 05 points."));
    }
    else if (aliensToShoot2[i] === 'Yellow') {
        console.log("Shot the Yellow one at turn ".concat(String(i + 1).padStart(2, '0'), ". Earned 10 points."));
    }
    else {
        console.log("Shot the Red    one at turn ".concat(String(i + 1).padStart(2, '0'), ". Earned 15 points."));
    }
}
