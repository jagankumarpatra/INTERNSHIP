const email=document.getElementById("email");
const pass=document.getElementById("password");

function handleLogin(){
    if(email.value==="sarun@sarun" && pass.value==="12"){
        alert("logged in");
        localStorage.setItem("token",JSON.stringify(Date.now()));
        window.location.href="./index.html";
    }
}
