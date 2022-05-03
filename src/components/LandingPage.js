import React from "react";
import "./animations.css";
import { Link } from "react-router-dom";

const LandingPage = ()=>{
    return (
        <section className="landing-page">
            <div className="page-context-container">
                <div className="cirle-gradient"></div>
                <img className="logo-icon" src="/Images/icon.png" alt="profile"></img>
                <h2 className="icon-logo-text">शिवसारथी</h2>
                <div className="circle-icon" id="first-circle">
                    <p className="icon-text">AudioBooks</p>
                </div>
                <div className="circle-icon" id="second-circle">
                    <p className="icon-text">Letters</p>
                </div>
                <div className="circle-icon" id="third-circle">
                    <p className="icon-text">Stories</p>
                </div>
                <h2 className="landing-header">Shri Shivaji Education Society</h2>
                <Link className="link-to-home" to="/home">Continew to App</Link>
                {/* <Link to={/home}>Continew To App.</Link> */}
            </div>
        </section>
    )
}

export default LandingPage;