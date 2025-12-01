// What is a Promise?
// A Promise is an object that represents the *future result* of an asynchronous task.
// It can either be: 
//   ✅ Resolved (success) → the task is completed successfully,
//   ❌ Rejected (failure) → the task failed.

//
// 📦 Example:
// You (the customer) order a pizza at a restaurant.
//   - The chef starts preparing it (task in progress - PENDING).
//   - If the pizza is ready → promise is RESOLVED (you get your pizza).
//   - If something goes wrong (no ingredients, oven broken) → promise is REJECTED.

//let isFoodReady

let PromiseOrderFood = new Promise((resolve, reject)=>{
   // Process of preparing your food
   let isFoodReady
   isFoodReady = true
   if (isFoodReady == true) {
    resolve("Here is your pizza!")
   } else {
    reject ("Sorry, we ran out of ingredients.")
   }
})

// Consuming the Promise using .then() and .catch()

  PromiseOrderFood
    .then((data)=>{console.log ("task2", data)})   // This block runs if the promise is RESOLVED (success)
    .catch((error)=>{console.log (error)})        // This block runs if the promise is REJECTED (failure)






