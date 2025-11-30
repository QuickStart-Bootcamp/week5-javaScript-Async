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

// Promise Receiver
//   1- Pending: The customer is waiting for their pizza to be prepared.
//   2- Fulfilled (Resolved): If the chef finishes the pizza, the customer receives it and enjoys the meal. 🍕🙂
//   3- Rejected: If the chef cannot make the pizza, the customer is disappointed. ❌😞

PromiseOrderFood
  .then(
      // This block runs if the promise is RESOLVED (success)
      // You got your pizza 🍕
      (message)=>{
        console.log("✅ Success:", message);
      })
  .catch(
    // This block runs if the promise is REJECTED (failure)
    // Something went wrong in the kitchen 😢
    (error)=>{
      console.log("❌ Error:", error);
    })
