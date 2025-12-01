// Promise Receiver
//   1- Pending: The customer is waiting for their pizza to be prepared.
//   2- Fulfilled (Resolved): If the chef finishes the pizza, the customer receives 🍕
//   3- Rejected: If the chef cannot make the pizza, the customer is disappointed. 😞

let isFoodReady

let PromiseOrderFood = new Promise((resolve, reject)=>{
   // Process of preparing your food
   isFoodReady = true
   if (isFoodReady == true) {
    resolve("Here is your pizza!")
   } else {
    reject ("Sorry, we ran out of ingredients.")
   }
})



console.log (PromiseOrderFood)
  