import react from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Sidebaritem({children,icon,  ...delegated}){
const wrapperClass=delegated.wrapperClass||""
const iconClass=delegated.iconClass||""
return <div className={`${wrapperClass} wrapper__Sidebaritem`}  {...delegated}><div className={`wrapper__Sidebaricon ${iconClass}`}> <FontAwesomeIcon icon={icon} size={delegated.size}/></div>{children}</div>
}

export default Sidebaritem