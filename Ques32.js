var currentUsers1 = ['asif.iqbal', 'khuram.manzoor', 'ali.razzaq', 'daniyal.nagori', 'Zia.Khan'];
var newUsers1 = ['Asif.Iqbal', 'mustafa', 'haseeb', 'talha', 'zia.khan'];
newUsers1.forEach(function (u) {
    var currentUsers1LC = currentUsers1.map(function (u) {
        return u.toLowerCase();
    });
    if (currentUsers1LC.includes(u.toLowerCase())) {
        console.log("Username ".concat(u, " is already taken. Try another username."));
    }
    else {
        console.log("Username ".concat(u, " is available. Please proceed with signup."));
    }
});
