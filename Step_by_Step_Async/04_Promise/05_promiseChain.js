// Promise is an object that represents the eventual completion or failure of an asynchronous operation. 

let isConnected

let promiseApiConnection1 = new Promise(function(resolved, rejected){

  isConnected = false;
  if (isConnected) {
    resolved ("Api connected successfully")
  } else {
    rejected ("Error 400, API can not connect")
  }
})


PromiseOrderFood
    .then((data)=>{console.log ("task2", data)})   // This block runs if the promise is RESOLVED (success)
    .then((data)=>{console.log ("task3", data)})
    .then((data)=>{console.log ("task4", data)})
    .catch((error)=>{console.log (error)})        // This block runs if the promise is REJECTED (failure)
