const access_key = `fpkwBKZb94AQf9zme4pOg7MqN4IFCFMuc2auqHIybPQ`

const url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=30`


let currentImages = 0;
let images;

async function getImages(){

    try{
        let res = await fetch(url)
        let data = await res.json();
        
        //console.log(data)
        images = data;
        makeImages(images)
    }
    catch(error){
        console.log(error)
    }
}



const makeImages = (data) => {

    let gallery = document.getElementById("gallery");

    data.forEach((el, index) => {

        console.log(el)

        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = el.urls.regular;
        img.className = "gallery_img"

        div.append(img)

        gallery.append(div)


        img.addEventListener("click" ,() =>{
            currentImages = index;
            showPopup(el)
        })


    })

}


const showPopup = (el) => {

    let popup = document.querySelector(".popup");
    let download = document.getElementById("download")
    let closeBtn = document.getElementById("closeBtn")
    let image = document.getElementById("large")

    popup.classList.remove("hide");
    download.href = el.links.html;
    image.src = el.urls.regular


    closeBtn.addEventListener("click", () =>{
        popup.classList.add("hide")
    })
}

const prev = document.getElementById("prev")
const next = document.getElementById("next")

prev.addEventListener("click" ,() => {
    if(currentImages > 0){
        currentImages--;
        showPopup(images[currentImages])
    }
})

next.addEventListener("click" ,() => {
    if(currentImages < images.length-1){
        currentImages++;
        showPopup(images[currentImages])
    }
})

getImages()



function logIn(){
    window.location.href = "/Login/login.html"
}


function signUp(){
    window.location.href = "/signup/signup.html"
}