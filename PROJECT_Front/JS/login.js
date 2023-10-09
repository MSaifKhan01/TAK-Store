document.getElementById("submit").addEventListener("click", () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

    let res = fetch("https://tak-store-app.onrender.com/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if(data.token){
         sessionStorage.setItem("token", data.token);
         sessionStorage.setItem("name", data.name);
        
        alert("login sucessfull!");
        window.location.href = "./index.html";
        }else{
            alert(data.msg)
        }
        
      })
      .catch((err) => {
        console.log(err);
      });

 
  });