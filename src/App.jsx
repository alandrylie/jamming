import "./App.css";
import SearchResults from "./components/SearchResults";
import SearchBar from "./components/SearchBar";
import Playlist from "./components/Playlist";
import { useState } from "react";
import { searchTracks } from "./api/itunes.js";
import { savePlaylist } from "./api/jsonplaceholder.js";

function App() {
    const [playlistName, setPlaylistName] = useState("My Playlist");
    function handleUserInput(e) {
        setPlaylistName(e.target.value);
    }

    const [tracks, setTracks] = useState([]);

    async function search(term) {
        try {
            const results = await searchTracks(term);
            setTracks(results);
        } catch (error) {
            alert(error.message);
        }
    }

    const [playlistTracks, setPlaylistTracks] = useState([
        { id: 3, name: "Highway to Hell", artist: "AC/DC", album: "Highway to Hell" },
        { id: 4, name: "Thunderstruck", artist: "AC/DC", album: "The Razors Edge" }
    ]);
    async function save() {
        try {
            const result = await savePlaylist(playlistName, playlistTracks);
            alert(`Playlist saved! id: ${result.id}`);
            setPlaylistName("");
            setPlaylistTracks([]);
        } catch (error) {
            alert(error.message);
        }
    }

    function addTrack(track) {
        if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
            return alert("Track already exists in the playlist");
        }
        setPlaylistTracks((prev) => {
            return [track, ...prev];
        });
    }

    function removeTrack(track) {
        setPlaylistTracks((prev) => {
            return prev.filter((savedTrack) => savedTrack.id !== track.id);
        });
    }

    return (
        <div className="app">
            <h1 className="title">Ja<span>mmm</span>ing</h1>
            <div>
                <SearchBar search={search} />
            </div>
            <div className="columns">
                <SearchResults SearchResults={tracks} addTrack={addTrack} />
           
                <Playlist 
                    TrackList={playlistTracks}
                    playlistName={playlistName}
                    handleUserInput={handleUserInput}
                    removeTrack={removeTrack}
                    save={save}
                />
            </div>
        </div>
    );
}
export default App;
