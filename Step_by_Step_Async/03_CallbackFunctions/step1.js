// Callback Function: A function that is passed as an argument to another function 
// and is executed after that function completes its task.

// Usage: Handle asynchronous operations such as:
//        - Reading a file
//        - Network requests (e.g., API calls)
//        - Interacting with a database

// Description: Once the asynchronous operation is complete, the callback function is invoked.

function task1 () {
  console.log ("task1: Connecting to database")
}

function task2 () {
  console.log ("task2: Getting data from database")
}

task1()
task2();

