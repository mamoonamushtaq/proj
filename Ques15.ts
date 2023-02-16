const guests: string[] = ['Baby Mahnoor', 'Aapi Areeba', 'Aneela'];

console.log(`Hi ${guests[0]}. 
Hope this message finds you in good health. 
Hey, we are organizing our baby's 5th birthday this weekend on Sunday at 06:00 pm.
You are invited to attend your friend's birthday party with Mom and Pop. Please come and we'll enjoy.
Baby Abeel's Mom.
`);

console.log(`Assalam o alaikum ${guests[1]}!
I hope and pray that you are fine by grace of Allah.
We'll be having a birthday party on next Friday for . 
I am writing this to invite you to my birthday party this Friday.
Please join us to wish the little baby.
Baby Abeel Family.
`);

console.log(`Good morning ${guests[2]}, 
I am writing this to invite you to the birthday party for baby Abeel.
Awaiting your confirmation.
Thanks.
Abeel and Family.
`);

console.log(`---------------------------------------------------------------------------------
`);

const guestWhoCantMakeIt2: string = guests[2];
console.log(`${guestWhoCantMakeIt2} will not be able to make it to the party.`);

console.log(`---------------------------------------------------------------------------------
`);

const newGuest2: string = 'Haroon';

guests[2] = newGuest2;

console.log(`Reminder... 
Hi ${guests[0]}, there is a party on Friday.
`);

console.log(`Reminder... 
Hi ${guests[1]}, there is a party on Friday.
`);

console.log(`Good morning ${guests[2]}, 
I am writing this to invite you to the birthday party for baby Abeel.
Even though not much is left. Still hoping that you will make it.
Thanks.
Baby Abeel and Family.
`); 
