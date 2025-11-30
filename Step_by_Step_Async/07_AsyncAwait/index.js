// Async: Make function to return promise
// await: Wait for the promise
// api: https://jsonplaceholder.typicode.com/users

 async function clickHandler_fetchdata () {
  let response = await fetch ("https://jsonplaceholder.typicode.com/users")
  let data = await response.json()
  data.forEach(element => {
    console.log (element)
    console.log (element.username)
  });
}


// async function fetchdata () {
//   try {
//     let response = await fetch ("https://jsonplaceholder.typicode.com/users")
//     let arrUsers = await (response.json())  
//     arrUsers.forEach((jesica)=>{console.log (jesica)})
//   }
//   catch {} 
// }

// fetchdata()


async function fetchData() {

  let response = await fetch ("https://api.giphy.com/v1/gifs/search?api_key=ltqV4ZQdyCRsPEBwhkhP6e1AI2EhJoGo&q=ocean&limit=35&offset=0&rating=g&lang=en&bundle=messaging_non_clips")
  let giphyJson = await response.json()
  let arrPicture = giphyJson.data

  for (let index = 0; index < arrPicture.length; index++) {
    //console.log (arrPicture[index].images.original.url)
    let newImage = document.createElement ('img')
    newImage.src = arrPicture[index].images.original.url

    document.getElementById("giphyImages").append (newImage)
  }

}
 

fetchData()



