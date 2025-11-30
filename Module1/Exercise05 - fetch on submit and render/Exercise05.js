let repoContainer = document.querySelector('.js-repo-container');
let form = document.querySelector('.js-repo-form');
let repoInput = document.querySelector('[name=repo-name]');

function fetchRepo(repoName) {
    fetch(`https://api.github.com/users/${repoName}/repos`)
        .then(data => data.json())
        .then(response => {
            // erroneous response is not an array, but an object
            if (!Array.isArray(response)) { 
                throw 'Erroneous response';
            }
            let processedResponse = '<ul>' + response
                .map(repo => `
                    <li>
                        <a href="${repo.url}">${repo.name}</a> 
                        (forks: ${repo.forks})
                    </li>
                `)
                .join('') + '</ul>';
            repoContainer.innerHTML = processedResponse;
        })
        .catch(err => {
            console.warn(err);
            repoContainer.innerHTML = `<p>Error fetching repo ${repoName}</p>`;
        });
}

function formSubmitted(event) {
    event.preventDefault();
    let repoName = repoInput.value;
    fetchRepo(repoName);
}

form.addEventListener('submit', formSubmitted);
