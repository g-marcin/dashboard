import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

function Button({iconName,...delegated}){
    let customClass = delegated.className||""
    
    return(<span className='outline__Graycircle'><button className={`button__Circle ${customClass}`}>
    <FontAwesomeIcon icon={iconName} {...delegated} /> 
 </button></span>
    );
}

export default Button