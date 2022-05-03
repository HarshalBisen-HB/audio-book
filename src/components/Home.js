import React from "react";
import "./Home.css";
import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";
const books = require("./Books.json");
const letters = require("./Letters.json");
const stories = require("./stories.json");



const Home = ()=>{
    const Navigate = useNavigate();
    const Book = ({image, title, id}) =>{
        let catagory
        if(id==="1" || id === "2"){
            catagory="books"
        }else if(id === "3" || id === "4"){
            catagory="letters"
        }else {
            catagory="stories"
        }
        return (
            <div className="book-container" onClick={()=> Navigate("/play?book="+catagory+"-"+id)}>
                <img className="book-image" src={image} alt="book"></img>
                <p className="book-title">{title}</p>
            </div>
        )
    }

   
    const mapBooks = (i)=>{
        return(<Book image={"/Images/book"+i.id+".png"} title={i.title} id={i.id}/>)
    }
    const playIntro = ()=>{
        Navigate("/play?book=intro-0")
    }
    return(
        <section className="home-section">
            
            <Navbar />
            <div className="banner-container">
                <img className="banner-image" src={"/Images/banner.jpg"} alt="banner" ></img>
            </div>
            
            {/* <div className="catagories-container">
                <h3>catagories</h3>
                <div className="catagory-grid">
                    <p className="catagory-text">Audio Books</p>
                    <p className="catagory-text">Letters</p>
                    <p className="catagory-text">Stories</p>
                    <p className="catagory-text">Audio Books</p>
                    <p className="catagory-text">Letters</p>
                    <p className="catagory-text">Stories</p>
                </div>
                
            </div> */}
            <div className="books-section">
                <h3 className="catagory-header">प्रास्तावना</h3>
                    <div className="flex-center">
                        <img className="intro-image" src="/Images/book0.png" onClick={()=> playIntro()} alt="intro"></img>
                    </div>
                    
            </div>
            
            <div className="books-section">
                <h3 className="catagory-header">Audio Books</h3>

                <div className="books-container">
                    {books.map((i)=>mapBooks(i))}
                </div>
            </div>
            <div className="books-section">
                <h3 className="catagory-header">Letters</h3>

                <div className="books-container">
                    {letters.map((i)=>mapBooks(i))}
                </div>
            </div>
            <div className="books-section">
                <h3 className="catagory-header">Intresting Stories</h3>

                <div className="books-container">
                    {stories.map((i)=>mapBooks(i))}
                </div>
            </div>
            
        </section>
    );
}

export default Home;