// Try this in the console.

// Write an async function to retrieve a repository
// 'https://api.github.com/users/bitcoin/repos' 
// Console log the result on top level 

// You can only use the await operator in async functions or on top level.
async function getRepos() {
    let repos = await fetch('https://api.github.com/users/bitcoin/repos');
    let data = await repos.json();
    return data; // async functions wrap their return values in a promise
}

let promise = getRepos();
let repos = await promise; // top level usage of await to unwrap a promise.
console.log(repos);