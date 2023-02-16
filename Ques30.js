var userNames1 = ['admin', 'asifiqbal', 'zia.khan', 'daniyal', 'ali.r'];
var greetings1 = [
    'Hello {__user__}, would you like to see a status report?',
    'Hello {__user__}, thank you for logging in.',
    'Hello and welcome back {__user__}',
];
var make_greeting1 = function (user) {
    if (user == 'admin' || user == 'superadmin' || user == 'sa') {
        return greetings1[0].replace('{__user__}', user);
    }
    else {
        var randomGreetingIndex = Math.round(Math.random() * 1) + 1;
        return greetings1[randomGreetingIndex].replace('{__user__}', user);
    }
};
for (var idx = 0; idx < userNames.length; idx++) {
    console.log(make_greeting(userNames[idx]));
}
