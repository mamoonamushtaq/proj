const userNames2: string[] = [];

const greetings2: string[] = [
  'Hello {__user__}, would you like to see a status report?',
  'Hello {__user__}, thank you for logging in.',
  'Hello and welcome back {__user__}'
];

const make_greeting2 = function(user: string): string {
  if (user === 'admin' || user === 'superadmin' || user === 'sa') {
    return greetings1[0].replace('{__user__}', user);
  } else {
    const randomGreetingIndex = Math.round(Math.random() * 1) + 1;
    return greetings2[randomGreetingIndex].replace('{__user__}', user);
  }
};

if (userNames2 && Array.isArray(userNames2) && userNames2.length > 0) {
  for (let idx = 0; idx < userNames2.length; idx++) {
    console.log(make_greeting(userNames2[idx]));
  }
} else {
  console.log('No users exist to send greetings to. We need to find some users!');
}
