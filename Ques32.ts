const currentUsers2: string[] = ['asif.iqbal', 'khuram.manzoor', 'ali.razzaq', 'daniyal.nagori', 'Zia.Khan'];
const newUsers2: string[] = ['Asif.Iqbal', 'mustafa', 'haseeb', 'talha', 'zia.khan'];

newUsers2.forEach(u => {
    const currentUsers1LC = currentUsers2.map(u => {
        return u.toLowerCase();
    });

    if (currentUsers1LC.includes(u.toLowerCase())) {
        console.log(`Username ${u} is already taken. Try another username.`);
    } else {
        console.log(`Username ${u} is available. Please proceed with signup.`);
    }
});
