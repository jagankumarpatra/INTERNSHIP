// import React from 'react';
// import { useState } from 'react';

// function Card() {
//     const [change,setChange]=useState(false);
//     const handleClick=()=>{
//         setChange(!change);
//     }
//     console.log(change);
//     return(
//         <div>
//             {change===false ? <h1>UnChange</h1> :<h1>Changed</h1> }
            
//             <button onClick={handleClick}>Click Me</button>
//         </div>
//     )
// }
// export default Card;

// // we are using useState hook for changing the desgingn its the managanemnt technique;

// GET METHOD

import React from "react";
function Card({name, image}){
    return(
       <div>
         <img width={"200px"} height={"100px"} src={image} alt="" />
         <h3>{name}</h3>
       </div>
    )
}
export default Card;
