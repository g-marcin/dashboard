import react, { Children } from "react"

function Submenu({children, ...delegated}){
    return <div className="wrapper__Sidebarsubmenu" {...delegated}>{children}</div>
}

export default Submenu