const id=JSON.parse(localStorage.getItem("id"));
const show=document.getElementById("show_details");
fetch(`http://localhost:8080/data/${id}`,{
    method:"GET"
}).then((res)=>res.json())
.then((data)=>appendData(data));

function appendData(data){
    const div=document.createElement("div");
    const img=document.createElement("img");
        img.src=data.image;
    const item=document.createElement("h1");
        item.innerText=data.item;
    div.append(img,item);
    show.append(div); 

}