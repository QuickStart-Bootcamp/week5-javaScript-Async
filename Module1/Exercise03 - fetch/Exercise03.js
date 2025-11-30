fetch('https://api.github.com/users/bitcoin/repos')
    .then(data => data.json())
    .then(response => {
        let processedResponse = response.map(repo => ({
            name: repo.name,
            url: repo.url, 
            forks: repo.forks
        }));
        console.log(processedResponse);
    });