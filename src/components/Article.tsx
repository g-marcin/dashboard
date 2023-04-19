import React from "react";




import Customprogressbar from "./Progressbar";

function Article({title, content, image, progress}){
    
    return(
        <div className="wrapper__Article">
            <img className="image__Article" src={image} alt="" />
            <div className="wrapper__Articlecontent">
            <h5 style={{"marginBottom":"0px"}}>{title}</h5>
            <p style={{"marginTop":"0px"}}>
             {content}
             </p>
            </div>
            <Customprogressbar progress={progress}/>
            
        </div>

    )

}

export default Article