/*
   A Promise is an object that represents the *future result* of an asynchronous task.
   Reference: https://www.w3schools.com/js/js_promise.asp
   It can either be: 
   Resolved (success) → the task is completed successfully,
   Rejected (failure) → the task failed.
*/

let isFoodReady

let PromiseOrderFood = new Promise((resolve, reject)=>{

   isFoodReady = true
   if (isFoodReady == true) {
    resolve("Here is your pizza!")
   } else {
    reject ("Sorry, we ran out of ingredients.")
   }
})