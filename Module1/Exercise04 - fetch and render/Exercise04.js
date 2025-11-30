let repoContainer = document.querySelector('.js-repo-container');

fetch('https://api.github.com/users/bitcoin/repos')
    .then(data => data.json())
    .then(response => {
        let processedResponse = response
            .map(repo => `
                <li>
                    <a href="${repo.url}">${repo.name}</a> 
                    (forks: ${repo.forks})
                </li>
            `)
            .join('');
        repoContainer.innerHTML = processedResponse;
    });