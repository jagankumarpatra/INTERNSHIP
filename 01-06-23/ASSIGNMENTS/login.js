const email = document.getElementById("email");
const pass = document.getElementById("password");

function findUser() {
  fetch("http://localhost:8080/recipe", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const user = data.find(
        (el) => el.email === email.value && el.password === pass.value
      );
      console.log(user);
      if (user) {
        alert("Logged in Successfully");
        window.location.href = "recipe.html";
      } else {
        window.location.href = "./index.html";
      }
    });  
}