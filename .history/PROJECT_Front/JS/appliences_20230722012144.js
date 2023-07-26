let bestofElctronic_product_itemEl = document.querySelector(".bestofElctronic_product_item")
let CartArr = JSON.parse(localStorage.getItem("length")) || [];

// span.innerText=CartArr

fetch("https://glamorous-pear-rugby-shirt.cyclic.app/electronic", {
    method: "GET",
    headers: {
        //   authorization: `${sessionStorage.getItem("token")}`,
        "content-type": "application/json",
    },
})
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        
        display(data);
        searchbar(data)
        console.log(data);
        // display(sorted1)
    });
  
   
    let sort1=document.getElementById("sort1")
    sort1.addEventListener("click",()=>{
        sorting1()
    })
    function sorting1(){
       
        fetch("https://glamorous-pear-rugby-shirt.cyclic.app/electronic/sort1", {
    method: "GET",
    headers: {
        //   authorization: `${sessionStorage.getItem("token")}`,
        "content-type": "application/json",
    },
})
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        display(data);
        // display(sorted1)
    });
    }
     
    let sort2=document.getElementById("sort2")
    sort2.addEventListener("click",()=>{
        sorting2()
    })
    function sorting2(){
       
        fetch("https://glamorous-pear-rugby-shirt.cyclic.app/electronic/sort2", {
    method: "GET",
    headers: {
        //   authorization: `${sessionStorage.getItem("token")}`,
        "content-type": "application/json",
    },
})
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        display(data);
        // display(sorted1)
    });
    }

    let featured=document.getElementById("featured")
    function sorting3(){
       
       fetch("https://glamorous-pear-rugby-shirt.cyclic.app/electronic/sort3", {
   method: "GET",
   headers: {
       //   authorization: `${sessionStorage.getItem("token")}`,
       "content-type": "application/json",
   },
})
   .then((res) => {
       return res.json();
   })
   .then((data) => {
       console.log(data);
       display(data);
     
   });
   }
    function sorting4(){
       
       fetch("https://glamorous-pear-rugby-shirt.cyclic.app/electronic/sort4", {
   method: "GET",
   headers: {
       //   authorization: `${sessionStorage.getItem("token")}`,
       "content-type": "application/json",
   },
})
   .then((res) => {
       return res.json();
   })
   .then((data) => {
       console.log(data);
       display(data);
     
   });
   }
featured.addEventListener("change",()=>{

if(featured.value=="atoz"){
    sorting3()

}else if(featured.value=="ztoa"){
    sorting4()

}

})

function searchbar(data){
let search = document.getElementById("searcBox");
search.addEventListener("input", (e) => {
  e.preventDefault();
  const value = e.target.value;

  let newArr = data.filter(element => {

    return element.size.toLowerCase().includes(value) || element.description.toLowerCase().includes(value);

  })
  console.log(data)
  display(newArr)

})

}

// let searchBtn=document.getElementById("searchBtn")
// searchBtn.addEventListener("click",()=>{

//     searching()
// })
// function searching(){
//     let searcBox=document.getElementById("searcBox").value

//     fetch("http://localhost:8000/product/?`${stars=searcBox}`", {
//         method: "GET",
//         headers: {
//             //   authorization: `${sessionStorage.getItem("token")}`,
//             "content-type": "application/json",
//         },
//     })
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             console.log(data);
//             display(data);
//             // display(sorted1)
//         });
//         console.log(searcBox)
// }
  
function display(data) {

    bestofElctronic_product_itemEl.innerHTML = null
    data.forEach(el => {
        let card = document.createElement("div")
        card.classList.add("card")
        let link1 = document.createElement("a")
        link1.classList.add("BestofElectronic_item")
        link1.link = el.link
        let div1 = document.createElement("div")
        div1.classList.add("bestOfElectornic_image_Product")
        let img = document.createElement("img")
        img.src = el.image
        let div2 = document.createElement("div")
        div2.classList.add("bestofElectronicmoreOption")

        let p = document.createElement("p")
        p.classList.add("bestofElectornicProduct_name")
        p.innerText = el.description
        let p2 = document.createElement("p")
        p2.classList.add("bestofElecronic_discount")
        p2.innerText = `₹${el.new_price}`
        let p3 = document.createElement("p")
        p3.classList.add("bestofElectronic_brand")
        p3.innerText = el.stars
        
        p3.style.color = 'red'
        // let p4 = document.createElement("p")
        // p4.innerText=el.qty
        let div3 = document.createElement("div")
        div3.classList.add("btndiv")
        let btn1 = document.createElement("button")
        btn1.innerText = "Show Details"
        let btn2 = document.createElement("button")
        btn2.innerText = "Add to Cart"
      
        div1.append(img)
        div3.append(btn1, btn2)
        div2.append(p, p2, p3, div3)
        link1.append(div1, div2)
        card.append(link1)

        bestofElctronic_product_itemEl.append(card)


        btn2.addEventListener("click", () => {
    // if (checkDuplicate(data)) {
    //   alert("Product Already in Cart")
    // } else {
    //   CartArr.push(el);
    //   localStorage.setItem("cart", JSON.stringify(CartArr));
    //   alert("Product Added To Cart")
    //   window.location.href = "./addTocart.html"
    // }

    let token=sessionStorage.getItem("token")
    if(token){
        fetch(`http://localhost:8000/cart/Electronics/${el._id}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`${sessionStorage.getItem("token")}`
            },
            body:JSON.stringify(el)
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
         
            if(data.ok){
            alert(data.msg)
         }else{
            alert(data.msg)
         }
            // data.push({...el,qty:1})
            // alert("Product added to cart") 
            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })


    }else{
        alert("You need to login")
    }
    
  })




    })
    

}





//     function checkDuplicate(data) {
//     for (let i = 0; i < CartArr.length; i++) {

//       if (CartArr[i]._id === data._id) {
//         return true;

//       }
//     }
//     return false;
//   }