import React, { ReactElement } from "react"

function Card({title, description, children, ...delegated}:{title:string, description:string, children:ReactElement, className?:string} ){
    let customClass = delegated.className || ""
    return(
        <div  {...delegated} className={`wrapper__Card ${customClass}`}>
           <div className="header__Card">
           <h3 >{title}</h3>
            <select placeholder="Viev All" className={`push text__Gray`} style={{"height":"32px", "alignSelf":"end"}}>
                <option value="">Viev All</option>
                <option value="">Option 1</option>
                <option value="">Option 2</option>
            </select>
           </div>
           
           <p className="text__Gray" style={{"marginTop":"-2px"}}>{description}</p>
           <div className="wrapper__Cardcontent">
           {children}
           </div>
           
           
        </div>
    )
}

export default Card