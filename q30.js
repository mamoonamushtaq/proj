const userNames = ['admin', 'asifiqbal', 'zia.khan', 'daniyal', 'ali.r'];
const greetings = [
                    'Hello {__user__}, would you like to see a status report?',
                    'Hello {__user__}, thank you for logging in.',
                    'Hello and welcome back {__user__}'
                ]

const make_greeting = function(user) {
    if (user == 'admin' || user == 'superadmin' || user == 'sa') {
        return greetings[0].replace('{__user__}', user);
    } else {
        const randomGreetingIndex = Math.round(Math.random()*1) + 1;
        return greetings[randomGreetingIndex].replace('{__user__}', user);
    }
}
for(let idx=0; idx<userNames.length; idx++) {
    console.log(make_greeting(userNames[idx]));
}