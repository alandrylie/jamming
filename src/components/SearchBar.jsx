import { useState } from "react";

function SearchBar() {
    
        const [userInput, setUserInput] = useState("");
        function handleUserInput(e) {
            setUserInput(e.target.value);
        }
    

    return (
        <form>
            <label htmlFor="song">Search for a Song</label>
            <input id="song" type="text" value={userInput} onChange={handleUserInput}></input>
            <button type="submit">Search</button>
            
        </form>
    );
}

export default SearchBar;
