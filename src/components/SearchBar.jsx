import { useState } from "react";

function SearchBar(props) {
    const [userInput, setUserInput] = useState("");
    function handleUserInput(e) {
        setUserInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.search(userInput);
    }

    return (
        <div>
            <h2>Search</h2>
            <form onSubmit={handleSubmit} className="search">
                <label htmlFor="song">Search for a Song</label>
                <input id="song" type="text" value={userInput} onChange={handleUserInput} placeholder="Search for a song..."></input>
                <button className="btn" type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;
