import "./Navigation.css"
import {useState} from "react";
import {AiFillHome} from "react-icons/ai";
function Navigation ({path, clickable, className}) {
    const [homeColor, setHomeColor] = useState(true)
    const navContainerColor = `nav-container ${className} ${clickable === false ? "unclickable" : ""}`

 return (
     <div className={navContainerColor}>
        <a href={path}><AiFillHome className={"nav-home-icon"}/>Home</a>
     </div>
 )
}

export default Navigation