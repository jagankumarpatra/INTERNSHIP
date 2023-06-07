const data=[
    {
        image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJqWrB1Iz9jWsv3ZHuAAR39ThKmk404wn_6bLFeXcLA&usqp=CAU&ec=48665701",
        title :"Kerala Story",
        rating:1,
    },
    {
        image :
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJqWrB1Iz9jWsv3ZHuAAR39ThKmk404wn_6bLFeXcLA&usqp=CAU&ec=48665701",
        title :"Reddy",
        rating:2,
    },
    {
        image :
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJqWrB1Iz9jWsv3ZHuAAR39ThKmk404wn_6bLFeXcLA&usqp=CAU&ec=48665701",
        title :"Tare Zamen Pe",
        rating:3,
    },
    {
        image :
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJqWrB1Iz9jWsv3ZHuAAR39ThKmk404wn_6bLFeXcLA&usqp=CAU&ec=48665701",
        title :"Singham",
        rating:5,
    },
];

const moviebox=document.getElementById("showmovies");

data.forEach((el)=>{
    const div=document.createElement("div");

    const image=document.createElement("img");
    image.src=el.image;

    const movieTitle= document.createElement("h1");
    movieTitle.innerText=el.title;

    const rating=document.createElement("p");
    rating.innerText=el.rating;

    const button=document.createElement("button");
    button.innerText='Click movie';
    button.addEventListener("click",()=>{
        alert(`Your clciked movie is ${el.title}`);
    });
    div.append(image,movieTitle,rating,button);
    moviebox.append(div);
});


// FOR LOOPS

// for(let i=0;i<data.length;i++){
//     const div=document.createElement("div");

//     const image=document.createElement("img");
//     image.src=data[i].image;

//     const movieTitle= document.createElement("h1");
//     movieTitle.innerText=data[i].title;

//     const rating=document.createElement("p");
//     rating.innerText=data[i].rating;

//     const button=document.createElement("button");
//     button.innerText='Click movie';
//     button.addEventListener("click",()=>{
//         alert(`Your clciked movie is ${data[i].title}`);
//     });
//     div.append(image,movieTitle,rating,button);
//     moviebox.append(div);
// }
