const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects with at least 3 languages
const usersWithThreeLanguages = users.filter(user => user.languages.length >= 3);

// Use .map to create an array of strings with each element as a user's email address
const userEmails = users.map(user => user.email);

// Use .reduce to get the total years of experience
const totalYearsOfExperience = users.reduce((total, user) => total + user.yearsOfExperience, 0);

// Use .reduce to get the longest email
const longestEmail = users.reduce((longest, user) => (user.email.length > longest.length ? user.email : longest), '');

// Use .reduce to get the list of user names in a single string
const userNamesString = users.reduce((namesString, user) => `${namesString}, ${user.name}`, 'Your instructors are:').slice(2);

// Bonus: Use .reduce to get the unique list of languages
const uniqueLanguages = users.reduce((languages, user) => {
    user.languages.forEach(language => {
        if (!languages.includes(language)) {
            languages.push(language);
        }
    });
    return languages;
}, []);

// Output the results
console.log('Users with at least 3 languages:', usersWithThreeLanguages);
console.log('User emails:', userEmails);
console.log('Total years of experience:', totalYearsOfExperience);
console.log('Longest email:', longestEmail);
console.log('User names string:', userNamesString);
console.log('Unique languages:', uniqueLanguages);
