import TrackList from "./TrackList.jsx";
import { useState } from "react";

function Playlist(props) {
    const [userInput, setUserInput] = useState('')
    function handleUserInput(e) {
        setUserInput(e.target.value);
    }



    return (
        <div>
            <div>
                <h2>Play list</h2>
                <form>
                    <label htmlFor="playlistName">Playlist Name</label>
                    <input
                        type="text"
                        id="playListName"
                        value={userInput}
                        onChange={handleUserInput}
                    />
                    <button type="submit">Save Playlist</button>
                </form>
            </div>

            <div>
                <TrackList tracks={props.TrackList} />
            </div>
        </div>
    );
}

export default Playlist;
