import React from 'react';

function Card({username,image}){
    return(
        <div>
            <h1>{username}</h1>
            <img 
                style={{height:"100px",width:"100px"}}
                src={image} 
                alt="error"     
            />
        </div>
    )
}

export default Card;