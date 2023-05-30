
import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const SearchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyDmjxul2aL6dyZT8t0lkZrXfoVwTsbF7QA' + '&maxResults=40')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
    }
    return (
        <>

            <div className="header">
                <div className="row1">
                    <h1>A Room Without Book Is Like <br /> A Body Without Soul</h1>
                   <div className="info">
                    <p>Created By &copy; 2023-24<h2>&copy; Gorde Rushikesh</h2></p>
                   </div>
                </div>
                <div className="row2">
                    <h2>Find Your Books</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter a book Name"
                            value={search} onChange={e => setSearch(e.target.value)}
                            onKeyPress={SearchBook}
                        />

                        <button className="button"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <img src="./images/bg1.png" alt="" />
                </div>
            </div>
            <div className="container">
                {
                    <Card book={bookData} />

                }
            </div>
        </>
    )
}
export default Main;