

async function fetchData () {
  try {
    let response = await fetch ("https://api.giphy.com/v1/gifs/search?api_key=GTP3Xvawyk4Vo2axsgQQx3gUp5IthveU&q=cry&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips")
    let giphyJson = await (response.json())
    let giphyArray = giphyJson.data

    giphyArray.forEach(element => {
      let newImage = document.createElement("img")
      newImage.src = element.images.original.url
      document.getElementById("giphyImages").appendChild(newImage)
    });
  }
  catch (error) {
    console.log("Something went wrong.");
  }
}

document.getElementById("buttonSearch").addEventListener ("click", fetchData)
