// Promise is an object that represents the eventual completion or failure of an asynchronous operation. 
// States of a Promise:
// 1- Pending: The initial state, neither fulfilled nor rejected.
// 2- Fulfilled: The operation was completed successfully, and the promise has a result.
// 3- Rejected: The operation failed, and the promise has an error.
// Reference: https://www.w3schools.com/js/js_promise.asp

// A synchronous Senario: Api Connection
// 1- Is connected to Api --> Promise Resolve --> then after that do something
// 2- Is NOT connected to Api -- Promise Reject --> catch error
let isConnected

// Steps 1: Create promise
let promiseApiConnection1 = new Promise(function(resolved, rejected){
  // Steps for connecting to API
  isConnected = false;
  if (isConnected) {
    resolved ("Api connected successfully")
  } else {
    rejected ("Error 400, API can not connect")
  }
})



