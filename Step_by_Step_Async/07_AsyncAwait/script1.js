// Async: Make function to return promise
// await: Wait for the promise
// api: https://jsonplaceholder.typicode.com/users

 async function fetchData() {

  let response = await (fetch("https://jsonplaceholder.typicode.com/users"))
  let data = await (response.json())
  for (let i=0; i <data.length; i++) {
    console.log (data[i].email)
  }
}
 

fetchData()




