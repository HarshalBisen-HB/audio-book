import React,{useState} from "react";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = ()=>{
        setIsOpen(!isOpen);
    }
    
    return (
        <nav>
            <div className="navbar-container">
                <div className="hamburgur-menu-container" onClick={()=>handleClick()}>
                    {/* <span></span>
                    <span></span>
                    <span></span> */}
                    {isOpen ? <p className="close-btn">close</p> : <><span></span>
                    <span></span>
                    <span></span></>}
                </div>

                <div className={isOpen ? "menu-container-open" : "menu-container"}>
                    <Link className="menu-element" to="#">Home</Link>
                    <Link className="menu-element" to="/about">About</Link>
                    <Link className="menu-element" to="#">Library</Link>
                    <Link className="menu-element" to="#">Profile</Link>
                </div>

                <div className="logo-container">
                    <h1 className="logo-text">शिव<span>सारथी</span></h1>
                </div>
                <img className="logo-image" src="/Images/logo.jpg" alt="shivsarthi"></img>
            </div>
        </nav>
    )
}

export default Navbar;