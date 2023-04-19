import React from "react"
import Button from "./Button"

function Main({children, ...delegated}){
    return  (
       <div className="wrapper__Content">
    {children}
    </div>
        
    
     )
}

export default Main