let promise1 = fetch ("https://api.giphy.com/v1/gifs/search?api_key=tMvPYMnXds1JCRDTG874kWEIB6dPgONc&q=books&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips")

promise1
  .then ((response)=> {
    return response.json()
  })
  .then ((json)=> {
    return json.data
  })
  
console.log (promise1)