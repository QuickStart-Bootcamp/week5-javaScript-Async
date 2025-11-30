// A synchronous Senario: Api Connection
// API: https://jsonplaceholder.typicode.com/users
// 1- Is connected to Api --> Promise Resolve --> then after that do something
// 2- Is NOT connected to Api -- Promise Reject --> catch error

// Steps 1: Connect to API


// let p2 = fetch ("https://jsonplaceholder.typicode.com/users")

// p2
//   .then((response)=>{
//     return response.json()
//   })
//   .then((data)=>{console.log(data)})
//   .catch((error)=>{console.log(error)})



let p1 = fetch ("https://api.giphy.com/v1/gifs/search?api_key=tMvPYMnXds1JCRDTG874kWEIB6dPgONc&q=books&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips")
 p1
  .then ((response)=>{return (response.json())})
  .then ((json)=>{console.log (json)})
  .catch((error)=>{console.log (error)})

// p1
// .then((data)=>{
//   return data.json()
// })
// .then ((data)=>{
//   console.log (data)
// })
// .catch((error)=>{
//   console.log (error)
// })