import "./App.css";
import SearchResults from "./components/SearchResults";
import SearchBar from "./components/SearchBar";
import Playlist from "./components/Playlist";

function App() {
    const tracks = [
        { name: "Back in Black", artist: "AC/DC", album: "Back in Blank" },
        { name: "You Shook Me All Night Long", artist: "AC/DC", album: "Back in Black" },
        { name: "Highway to Hell", artist: "AC/DC", album: "Highway to Hell" },
        { name: "Thunderstruck", artist: "AC/DC", album: "The Razors Edge" },
    ];

    const playlistTracks = [
        { name: "Highway to Hell", artist: "AC/DC", album: "Highway to Hell" },
        { name: "Thunderstruck", artist: "AC/DC", album: "The Razors Edge" }
    ];
    return (
        <div>
         
            <div>
                <SearchBar/>
            </div>
            <div>
                <SearchResults SearchResults={tracks} />
            </div>
            <div>
                <Playlist TrackList={playlistTracks}/>
            </div>
        </div>
    );
}
export default App;
