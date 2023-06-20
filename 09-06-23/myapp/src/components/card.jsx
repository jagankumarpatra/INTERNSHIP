//                                       PAGINATION DONE USING API
import React from "react";

function Card({passenger,logo,title,country,trips}){
    return(
        <div>
            <h1>{passenger}</h1>
            <img src={logo} alt="err" />
            <h3>{title}</h3>
            <h3>{country}</h3>
            <p>{trips}</p>
        </div>
    );
}

export default Card;

//                                        PAGINATION DONE USING  DB.JSON
// import React from "react";
// import "./card.css";
// function Card({userId,title,body}){
//     return(
//         <div className="box">
//             <h1>{userId}</h1>
//             <h3>{title}</h3>
//             <p>{body}</p>
//         </div>
//     );
// }
// export default Card;


