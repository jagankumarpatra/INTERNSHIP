const takenemail = document.getElementById("email");
const takenpassword = document.getElementById("password");

function submitData(el) {
//   el.preventDefault(); // Use el instead of e
  if (takenemail.value !== "" && takenpassword.value !== "") {
    const obj = {
      id: Date.now(),
      email: takenemail.value,
      password: takenpassword.value,
    };
    fetch("http://localhost:8080/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  } else {
    alert("Fill in all the fields");
  }
  window.location.href = "./login.html";
}
