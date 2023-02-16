const lectureDates = [new Date('2022-10-02'), new Date('2022-10-09'), new Date('2022-10-16')];

console.log(lectureDates);
for(let i=0; i<4; i++) {
    console.log(lectureDates[i]);
    lectureDates[i].getTime();
}

// index error doesn't happen in JavaScript. 
// it just returns null for out of index element access.