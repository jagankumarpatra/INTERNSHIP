import React from "react";
// import "./card.css";
import {AiOutlineHeart} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";
import {FiSend} from "react-icons/fi";

function Card({username,image}){
    return(
        <div>
            <h1>{username}</h1>
            <img 
                style={{width:"35%",height:"500px"}}
                src={image} 
                alt="error"     
            />
            <div>
                <AiOutlineHeart/>
                <FaRegComment/>
                <FiSend/>
            </div>
        </div>
    )
}

export default  Card;