  // Write all necessery JS here 
    let span = document.getElementById("span")

    let Container = document.getElementById("cart-container");



    function fecth(){
        fetch("http://localhost:8000/cart/", {
        method: "GET",
        headers: {
            "Authorization": `${sessionStorage.getItem("token")}`,
            "content-type": "application/json",
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log("gwyjhsdcb")
            let arr=[]
        //    console.log(data)
            arr = [...data.Fashions , ...data.appliances , ...data.electronics]
            console.log("cart",arr);
           
            span.innerText = arr.length
            localStorage.setItem("length",arr.length)
            DisplayProduct(arr);
        });
    }

    fecth()

    function DisplayProduct(data) {
        let total = document.getElementById("cart-total")
        const totalPro = document.getElementById("top")
        Container.innerHTML = "";
        data.forEach((product) => {
            let card = document.createElement("div");
            card.classList.add("card")
            let img = document.createElement("img");
            let brand = document.createElement("h4");
            let size = document.createElement("p");
            let details = document.createElement("p");
            let quantity = document.createElement("p");
            quantity.classList.add("qty")
            let price = document.createElement("h3");
            let Remove = document.createElement("button");
            let Increment = document.createElement("button");
            let Decrement = document.createElement("button");

           
            quantity.innerText = product.Quantity
         
            img.src = product.data.image;
            let div1 = document.createElement("div");
            div1.classList.add("div1")
            div1.append(img)
            brand.textContent = product.data.description;
            size.innerText = product.data.size
            size.classList.add("size")
           
            price.textContent = `₹ ${product.data.new_price}`;
            details.textContent = product.data.stars;
            Remove.textContent = "Remove";
            Increment.textContent = "+";
            Decrement.textContent = "-";
            let div2 = document.createElement("div");
            div2.classList.add("div2")
            div2.append(brand, size, price, details, Remove, Increment, Decrement, quantity)

            Remove.addEventListener("click", () => {

                fetch(`http://localhost:8000/cart/delete/${product.data._id}`, {
                    method: "DELETE",
                    headers: {
                        "Authorization": `${sessionStorage.getItem("token")}`,
                        "content-type": "application/json",
                    },
                })
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        alert("Deleted succesfully")

                        console.log(data);
                        fecth()

                    });

            })
            Increment.addEventListener("click", () => {
               

                fetch(`http://localhost:8000/cart/inc/${product._id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `${sessionStorage.getItem("token")}`
                    }
                })
                    .then((res) => {
                        return res.json()
                    })
                    .then((res) => {
                
                       fecth()
                    })
                    .catch((err) => {
                        console.log(err.message)
                       
                    })

            })


            let total = document.getElementById("cart-total")
            let sum = 0
            for (let i = 0; i < data.length; i++) {
                sum += product.data.new_price * product.Quantity
            }
            total.innerText = sum
          

            Decrement.addEventListener("click", () => {
                
                if (product.Quantity > 1) {

                    fetch(`http://localhost:8000/cart/dec/${product._id}`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `${sessionStorage.getItem("token")}`
                        }
                    })
                        .then((res) => {
                            return res.json()
                        })
                        .then((res) => {
                        
                            console.log(res)
                            fecth()
                        })
                        .catch((err) => {
                            console.log(err.message)
                        })
                }
            })

            Container.append(card);
            card.append(div1, div2);

        });
    }

    document.getElementById("plcordrBtn").addEventListener("click", () => {
        window.location.href = "./payment.html"
    })

