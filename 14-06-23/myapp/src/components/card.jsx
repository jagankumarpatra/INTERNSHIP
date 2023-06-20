import React from "react";
import { useMemo } from "react";

export const MemoCard = React.memo(({image,title,desc}) => {
    return(
        <div>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <h2>{desc}</h2>
        </div>
    );
});

const Card = ({postid,Id,email,body,title}) => {
    const myComponent = useMemo(() => {

    },[postid,Id,email,body,title])
};


export default Card;