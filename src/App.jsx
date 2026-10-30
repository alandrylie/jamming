import "./App.css";
import SearchResults from "./components/SearchResults";
import SearchBar from "./components/SearchBar";
import Playlist from "./components/Playlist";
import { useState } from "react";

function App() {
    const [playlistName, setPlaylistName] = useState("");
    function handleUserInput(e) {
        setPlaylistName(e.target.value);
    }

    const tracks = [
        { id: 1, name: "Back in Black", artist: "AC/DC", album: "Back in Blank" },
        { id: 2, name: "You Shook Me All Night Long", artist: "AC/DC", album: "Back in Black" },
        { id: 3, name: "Highway to Hell", artist: "AC/DC", album: "Highway to Hell" },
        { id: 4, name: "Thunderstruck", artist: "AC/DC", album: "The Razors Edge" }
    ];

    const [playlistTracks, setPlaylistTracks] = useState([
        { id: 3, name: "Highway to Hell", artist: "AC/DC", album: "Highway to Hell" },
        { id: 4, name: "Thunderstruck", artist: "AC/DC", album: "The Razors Edge" }
    ]);

    function addTrack(track) {
        if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
            return alert("Track already exists in the playlist");
        }
        setPlaylistTracks((prev) => {
            return [track, ...prev];
        });
    }

    return (
        <div>
            <div>
                <SearchBar />
            </div>
            <div>
                <SearchResults SearchResults={tracks} addTrack={addTrack} />
            </div>
            <div>
                <Playlist
                    TrackList={playlistTracks}
                    playlistName={playlistName}
                    handleUserInput={handleUserInput}
                />
            </div>
        </div>
    );
}
export default App;
