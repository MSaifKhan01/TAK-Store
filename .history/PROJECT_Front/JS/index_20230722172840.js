
const urlParams = new URLSearchParams(window.location.search);
let tokenurl = urlParams.get('token');
let username = urlParams.get("username")
let image = urlParams.get("image")

if (tokenurl) {

  sessionStorage.setItem("token", tokenurl)
  sessionStorage.setItem("name", username)
  sessionStorage.setItem("image", image)
}

  let logoutName=document.getElementById("logoutName")
let nametag=document.getElementById("nameshow")
let token=sessionStorage.getItem("token")
  let name=sessionStorage.getItem("name")
  let CartlengthTag=document.getElementById("Cartlength")
  let Cartlength=sessionStorage.getItem("length")
  // console.log(Cartlength)

  if(token){
    CartlengthTag.innerText=Cartlength
    nametag.style.display="none"
    logoutName.innerHTML=`<i class="fa-solid fa-user"></i> ${name}`
  
    let p=document.createElement("span")
    p.innerHTML=`<button>Logout</button>`
    p.style.marginLeft="5px"
    logoutName.append(p)
    
    logoutName.addEventListener("click",()=>{
      sessionStorage.clear()
      window.location.href = "./index01.html";
    })
  }
  let imgtag = document.createElement("img");

  let slidediv = document.getElementById("slideshow");
  slidediv.append(imgtag);
  let currentIndex = 0;

  var slideImages = [
    "flipkart images/banner1.jpg",
    "flipkart images/banner2.jpg",
    "flipkart images/banner3.jpg",
    "flipkart images/banner4.jpg",
  ];
  slideshowFun(slideImages);

  function slideshowFun(images) {
    imgtag.setAttribute("src", images[currentIndex]);
    if (currentIndex == images.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
  }
  window.addEventListener("load", function () {
    setInterval(slideshowFun, 2000, slideImages);
  });