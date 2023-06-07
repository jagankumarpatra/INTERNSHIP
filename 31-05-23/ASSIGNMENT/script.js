const data=[
    {
        image:"https://media-cdn.tripadvisor.com/media/photo-s/08/5c/67/35/lemongrass.jpg",
        title:"MayFair",
        data:"Tea Pot is the ironically, but perfectly the coffee-shop of the Mayfair Lagoon. With lavish buffet spreads coupled with a variety of live counters,."
    },
    {
        image:"https://media-cdn.tripadvisor.com/media/photo-s/07/c5/37/9b/priya-restaurant.jpg",
        title:"Hotel Priya",
        data:"Priya is one of the best hotel in Bhubaneswar who prepare south indian tiffin lilke dosa, idly, vada, chhole boture"
    },
    {
        
        image:"https://image3.mouthshut.com/images/imagesp/925769652s.jpg",
        title:"Eat Street",
        data:"This place remains very crowded all the time and it's very difficult to get a seat here. It's an open space place and food is very budget friendly."
    },
    {
        
        image:"https://image3.mouthshut.com/images/imagesp/925769652s.jpg",
        title:"Eat Street",
        data:"This place remains very crowded all the time and it's very difficult to get a seat here. It's an open space place and food is very budget friendly."
    },
    {
        image:"https://media-cdn.tripadvisor.com/media/photo-s/08/5c/67/35/lemongrass.jpg",
        title:"MayFair",
        data:"Tea Pot is the ironically, but perfectly the coffee-shop of the Mayfair Lagoon. With lavish buffet spreads coupled with a variety of live counters,."
    },
    {
        image:"https://media-cdn.tripadvisor.com/media/photo-s/07/c5/37/9b/priya-restaurant.jpg",
        title:"Hotel Priya",
        data:"Priya is one of the best hotel in Bhubaneswar who prepare south indian tiffin lilke dosa, idly, vada, chhole boture"
    },
];

const recipe=document.getElementById("Restauraunt");

for(let i=0;i<data.length;i++){
    const food=document.createElement("div");

    const imge=document.createElement("img");
    imge.src=data[i].image;

    const tile=document.createElement("h2");
    tile.innerText=data[i].title;

    

    const fdet=document.createElement("p");
    fdet.innerText=data[i].data;
    fdet.style.display="none";

    const btn1= document.createElement("button");
    btn1.innerText="Click for more";

    const btn2=document.createElement("button");
    btn2.innerText="Close it";

    btn1.addEventListener("click",()=>{
        if(fdet.style.display==="none"){
            
            fdet.style.display="block";
        }
        else{
            fdet.style.display="block";
        }
    });

    btn2.addEventListener("click",()=>{
        if(fdet.style.display==="block"){
            fdet.style.display="none";
        }
        else{
            fdet.style.display="block";
        }
    });

    food.append(imge,tile,fdet,btn1,btn2);
    recipe.append(food);
}