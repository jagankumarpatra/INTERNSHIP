import React, { useContext, useEffect, useState } from "react";
import Navbar from "./navbar";
import Card, { MemoCard } from "./card";
import SearchContext from "../searchContext";


function HomePage(){
    const {search}=useContext(SearchContext);
    console.log(search);
    const [arr,setArr]=useState([]);
    const [wholearr,setWholeArr]=useState([]);
    const [searchStr,setSearchStr]=useState("");

    const pageArr=[];
    let i=0;
    while (i< Math.ceil(wholearr.length/10)){
        pageArr.push(i+1);
        i++;
    }

    // Today's Code

    const [count, setCount] = useState(0);
    useEffect(() => {
      const idvar = setInterval(() => {
        console.log("Hi");
        setCount((prev) => prev +1);
      },2000)
      if (count === 5){
        clearInterval(idvar);
      }
      return () => clearInterval(idvar);
    },[count]);
/////////////////////////////////////////////
         
    
    const [page,setPage]=useState(1);

    const getData= async()=>{
        await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"GET",
        })
        .then((res)=> res.json())
        .then((data)=>{
            setWholeArr(data);
            const end=page*10;
            const start=page-1;
            const newData=data.slice(start*10,end);
            setArr(newData);
        });
    };
    const handlePage=(el) =>{
        setPage(el);
      };
    useEffect(()=>{
        getData();
    },[page]);

    


     return (
        <div >
            <Navbar/>
        {/* {arr.length > 0 ?(
          <div
          style={{display:"grid",
          gridTemplateColumns:"repeat(5,1fr)",
          marginTop:"5%",
          border:"5px solid black",
          background:"bisque",
        }}
          >
            {arr.map((el)=>{
              return <Card
              postid={el.postId}
              Id={el.id}
              title={el.name}
              email={el.email}
              body={el.body}
              />;
            })}
          </div>
        ) : (
          <h1>No Data Found</h1>
        )} */}
        <MemoCard image = "https://wallpapers.com/images/featured/d2xvrvlv9k6wgk5e.jpg"
          title = "Mountain" desc = "Beautiful" />
        {pageArr.map((el)=>{
          return <button onClick={() =>handlePage(el)}>{el}</button>;
        })}
        </div>
      );
}
export default HomePage;