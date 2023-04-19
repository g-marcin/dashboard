import { useState } from "react";
import Button from "./Button";





function Searchbar({...delegated}){
    const[inputValue, setInputValue] = useState<string>();


    return (
    
    <form className="wrapper__Searchbar" >
    <Button iconName={"search"} />
   
    <input  type="text"  {...delegated}/>
    </form>
  
    
  
     
   
    
    )
}

export default Searchbar