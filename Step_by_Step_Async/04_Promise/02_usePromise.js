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

// PromiseOrderFood
//   .then((data)=>{
//     console.log (data)
//     console.log ("task2")
//     console.log ("Eating pizza")
//   })
//   .catch((error)=>{
//     console.log (error)
//   })



  PromiseOrderFood
    .then((data)=>{console.log ("task2", data)})
    .then((data)=>{console.log ("task3", data)})
    .then((data)=>{console.log ("task4", data)})
    .catch((error)=>{console.log (error)})






