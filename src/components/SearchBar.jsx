import { useState } from "react";

function SearchBar() {
    
        const [userInput, setUserInput] = useState("");
        function handleUserInput(e) {
            setUserInput(e.target.value);
        }
    

    return (
        <div>
            <h2>Search</h2>
            <form>
                <label htmlFor="song">Search for a Song</label>
                <input id="song" type="text" value={userInput} onChange={handleUserInput}></input>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;
