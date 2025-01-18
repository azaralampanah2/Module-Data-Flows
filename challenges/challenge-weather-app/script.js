let currentTemp=document.getElementById("temp")
let goBtn=document.getElementById("goBtn")
let tempreture=document.getElementById("tempreture")
let inputCity=document.getElementById("search-tf")
let photo=document.getElementById("photo")
let im=document.getElementById("im")
let largePic=document.getElementById("largePic")
let thumbNails=document.getElementById("thumbs")

const state={
 tempreture:"",
 searchTerm:"",
 images:[],
 imageArr:[],
 corresImageName:""
}
 
 function fetchingTemp(){
  
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${state.searchTerm}&APPID=${OWM_KEY}`)
          .then(response=>
                
            
            response.json()
            )
          .then(data=>{
            console.log(data)
           state.tempreture=((data.main.temp)-273.15).toFixed(2)
       state.corresImageName=data.weather[0].description
       console.log(state.corresImageName)
        

          tempreture.textContent=`current tempreture for ${state.searchTerm} is : ${state.tempreture} Celsius`
          fetchImage(state.corresImageName)
          
          
      }
     
      )
 }
 inputCity.addEventListener("keyup",()=>{
thumbNails.innerHTML=""
tempreture.textContent=""
photo.style.backgroundImage = "none"
           state.imageArr=[] 
           state.images=[]
  state.searchTerm=inputCity.value
  
  console.log(state.searchTerm)
  
})

          
        goBtn.addEventListener("click",(event)=>{
          event.preventDefault()
          //state.imageArr=[] 
   // state.images=[]
   photo.style.backgroundImage=""
    thumbNails.innerHTML=""

          fetchingTemp()
          
          
    })
   
 
 function fetchImage(){     
 fetch(`https://api.unsplash.com/search/photos?query=${state.corresImageName}&client_id=${UnSplashId}`)
 .then(response=>response.json())
 .then(data=>{console.log(data.results)
 state.images=data.results
 nextfu(state.images)
 
 })
}
function nextfu(){
console.log(state.images)

 state.images.forEach((imagess,index)=>{
  
  state.imageArr.push(imagess.links.download)
  console.log(state.imageArr)
  const img = document.createElement("img")
  img.src=imagess.links.download
  thumbNails.appendChild(img)
  
  img.addEventListener("click",()=>{
    photo.innerHTML=""
    const image=document.createElement("img")
    image.classList.add("photo")
  image.src = state.imageArr[index]; // Set background image
  photo.appendChild(image)
  // photo.style.backgroundSize = "contain"; 
   
   //photo.style.backgroundRepeat="no-repeat"
        console.log(state.imageArr)
    
  })
  
 }
 
 )
}

 