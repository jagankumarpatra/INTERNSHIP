import React from "react";

function Card ({postid,Id,email,body,title}) {
    return (
        <div>
            <h1>{postid}</h1>
            <h2>{Id}</h2>
            <h3>{title}</h3>
            <h4>{email}</h4>
            <p>{body}</p>
        </div>
    );
}
export default Card;