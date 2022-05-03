import React from "react";
import { useLocation } from "react-router-dom";

import "./Home.css";
const books = require("./Books.json");
const letters = require("./Letters.json");
const stories = require("./stories.json");
const intro = require("./intro.json");


const Player = ()=>{
    const location = useLocation().search;
    const bookString = new URLSearchParams(location).get("book");
    
    const bookID = bookString.split("-")[1];
    const catagory = bookString.split("-")[0];
    console.log(bookID);
    console.log(catagory);
    let data;
    if(catagory === "stories"){
        data = stories.filter((i)=> i.id === bookID);
    }else if (catagory === "letters"){
        data = letters.filter((i)=> i.id === bookID);
    }else if(catagory === "book"){
        data = books.filter((i)=> i.id === bookID);
    }else {
        data = intro[0].id;
    }
    
    console.log(data);
    const BookCard = ()=>{
        return (
            <div className="bookcard-container">
                <img className="bookcard-image" src={"/Images/book"+bookID+".png"} alt="book thumbnail"></img>
                <h1 className="bookcard-title">{data[0].title}</h1>
            </div>
        )
    }
    return(
        <section className="player-section">
        <h1>Player</h1>
            <BookCard />
            <div className="player-container">
            <audio controls={true}>
            <source src={"/Music/book1.mp3"} type="audio/mpeg" autoPlay={true}></source>
            </audio>
            </div>
        </section>
        
    );
}

export default Player;