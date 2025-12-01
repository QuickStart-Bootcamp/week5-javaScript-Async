// A synchronous Senario: Api Connection
// A Synchronous Scenario (written in steps):
// API Connection using Fetch
//
// 1. If the API connects successfully → Promise RESOLVES → .then() runs
// 2. If the API cannot connect        → Promise REJECTS → .catch() runs

// Step 1: Call the API using fetch()
// fetch() ALWAYS returns a Promise




let p1 = fetch ("https://api.giphy.com/v1/gifs/search?api_key=tMvPYMnXds1JCRDTG874kWEIB6dPgONc&q=books&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips")
 p1
  .then ((response)=>{return (response.json())})
  .then ((json)=>{console.log (json)})
  .catch((error)=>{console.log (error)})
