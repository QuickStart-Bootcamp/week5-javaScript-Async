let promiseBakingCake = new Promise (function(resolve, reject){
  // Baking Cakeing
  let isCakeBaked = true
  let cake = "choclate cake"
  if (isCakeBaked) 
    resolve (cake) 
  else
    reject ("Sorry no cake today")
})


promiseBakingCake
  .then ((data)=>{console.log (data)})
  .catch ((error)=>{console.log (error)})




   









