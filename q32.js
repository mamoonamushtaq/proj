const currentUsers = ['asif.iqbal', 'khuram.manzoor', 'ali.razzaq', 'daniyal.nagori', 'Zia.Khan'];
const newUsers = ['Asif.Iqbal', 'mustafa', 'haseeb', 'talha', 'zia.khan'];

newUsers.forEach(u => {
    const currentUsersLC = currentUsers.map(u => {
        return u.toLowerCase();
    });

    if (currentUsersLC.includes(u.toLowerCase())) {
        console.log(`Username ${u} is already taken. Try another username.`);
    } else {
        console.log(`Username ${u} is available. Please proceed with signup.`);
    }
});
