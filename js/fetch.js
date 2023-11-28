function getLastCommitDate(username,token){
        return fetch(input`https://api.github.com/users/${username}/events`,
            {headers: {'Authorization': "token"+ token
            }
            })
            .then(response => response.json())
    }


    getLastCommitDate(username`seybautista`,GITHHUB_API_KEY)
        .then(data)

// Example usage:
const username = "your-github-username";
getLastCommitDate(username)
    .then(date => {
        console.log(`Last commit date for ${username}: ${date.toISOString()}`);
    })
    .catch(error => {
        console.error(`Error: ${error.message}`);
    });
