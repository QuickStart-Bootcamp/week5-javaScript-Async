// Promise is an object that represents the eventual completion or failure of an asynchronous operation. 

let isConnected

let promiseApiConnection = new Promise((resolved, rejected)=>{
  isConnected = false;
  if (isConnected) {
    resolved ("Api connected successfully")
  } else {
    rejected ("Error 400, API can not connect")
  }
})

