import React from "react";

import Avatar from "./Avatar";

function Task({}){
    return(
    <div className="wrapper__Task">
        <input type="checkbox"   />
        <div className="wrapper__Date">
            <div style={{"font-size":"12px"}}>Mon</div>
            <div style={{"font-size":"18px", "marginTop":"10px"}}>09</div>
        </div>
        <div className="wrapper__Avatars">
        <Avatar avatarId={"av1"} alt="av1"/>
        <Avatar avatarId={"av2"} alt="av2"/>
        </div>
        
        <div className="description__Task">
    <h4 className="text__Gray2" style={{}}>Political Articles</h4>
    <p className="text__Gray" style={{ "font-size":12}}>First chapter revision article</p>
        </div>
        <div className="wrapper__Spexcirclebutton push">
        <button className=" button__Spexcircle"><span className="spexcircle"></span>Spexcircle</button>
        </div>
    </div>
    )
}

export default Task