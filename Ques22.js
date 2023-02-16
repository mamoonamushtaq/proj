var lectureDates1 = [new Date('2022-10-02'), new Date('2022-10-09'), new Date('2022-10-16')];
console.log(lectureDates1);
for (var i = 0; i < 4; i++) {
    if (i < lectureDates1.length) {
        console.log(lectureDates1[i]);
        lectureDates1[i].getTime();
    }
    else {
        console.log("Index ".concat(i, " is out of range"));
    }
}
