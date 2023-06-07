const button = document.getElementById("clickable");
button.addEventListener("click", () => {
  const div = document.getElementById("showable");
  const image = document.createElement("img");
  image.src =
    "WIN_20230529_10_39_10_Pro.jpg" ;
    // image.style.width="200px";
  div.append(image);
});

const btn=document.getElementById("click1");
const betn=document.getElementById("click2");
btn.addEventListener("click",()=>{
  const con=document.getElementById("content");
  con.innerText="HI";
});
betn.addEventListener("click",()=>{
  const conn=document.getElementById("content");
  conn.innerText="";
});
