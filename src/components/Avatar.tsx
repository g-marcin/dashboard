import React from "react";
import avatars from "../../avatars/index.js" 


function Avatar({avatarId, alt}:{avatarId:string, alt:string}){
    let avatar = avatars.avatarId
return(
    <img className="avatar__Task" src={avatars[avatarId]} alt={alt}/>
)
}

export default Avatar