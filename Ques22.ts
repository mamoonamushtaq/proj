const lectureDates2: Date[] = [new Date('2022-10-02'), new Date('2022-10-09'), new Date('2022-10-16')];

console.log(lectureDates2);
for(let i = 0; i < 4; i++) {
  if (i < lectureDates2.length) {
    console.log(lectureDates2[i]);
    lectureDates2[i].getTime();
  } else {
    console.log(`Index ${i} is out of range`);
  }
}
