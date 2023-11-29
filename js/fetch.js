function getLastCommit(username, token) {
    return fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {
            'Authorization': "token" + token
        }
    })
        .then(response => response.json())
}

getLastCommit('sevbautista', GITHUB_API_KEY)
    .then(data => {
        console.log(data)
        let commit = data.filter(event => event.type === "PushEvent")
        console.log(commit);
        console.log(new Date(commit[0].created_at));
    })