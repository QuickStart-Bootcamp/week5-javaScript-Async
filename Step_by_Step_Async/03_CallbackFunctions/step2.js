// Callback Function: A function that is passed as an argument to another function 
// and is executed after that function completes its task.

// Usage: Handle asynchronous operations such as:
//        - Reading a file
//        - Network requests (e.g., API calls)
//        - Interacting with a database

// Description: Once the asynchronous operation is complete, the callback function is invoked.

// Lets think, completing first function takes time
// setTimeout: Ii a JavaScript function that lets us execute a piece of code after a specified amount of time has passed.
// setTimeout(functionRef, delay)

function task1 () {
  setTimeout(() => {
    console.log ("task1: Connecting to database")
  }, 4000);

}

function task2 () {
  console.log ("task2: Getting data from database")
}

task1()
task2()






