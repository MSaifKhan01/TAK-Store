document.getElementById("submit").addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobi = document.getElementById("mobi").value;
    let password = document.getElementById("pass").value;
    
   
    let age = document.getElementById("Age").value;
    if (
      email !== "" &&
      password !== "" &&
      name !== "" &&
      age != ""
    ) {
      let res = fetch("http://localhost:8000/user/register",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(
            {
            name: name,
            email: email,
            mobile_No: mobi,
            password: password,
            
            age: age,

            
          }
          ),
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });

      alert("user register successful!!");
      window.location.href = "./login.html";
    } else {
      alert("please fill the details");
    }
  });