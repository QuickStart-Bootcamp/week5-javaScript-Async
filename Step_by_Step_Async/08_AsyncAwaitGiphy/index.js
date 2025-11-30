document.getElementById("btnSearch").addEventListener ("click",fetchPictures)

async function fetchPictures () {

    let searchTerm = document.getElementById("searchPhrase").value
    let responseGiphy = await fetch (`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
    
    let jsonGiphy = await responseGiphy.json()
    let dataGiphy = jsonGiphy.data
    document.getElementById("divGiphy").innerHTML=""
    dataGiphy.forEach(element => {
        let newImage = document.createElement ("img")
        newImage.src = element.images.original.url
        document.getElementById("divGiphy").append(newImage)
    });
}

