const numbers2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ord1: string;

for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] === 1) ord = `${numbers2[i]}st`;
  else if (numbers2[i] === 2) ord = `${numbers2[i]}nd`;
  else if (numbers2[i] === 3) ord = `${numbers2[i]}rd`;
  else ord = `${numbers2[i]}th`;

  console.log(ord);
}
