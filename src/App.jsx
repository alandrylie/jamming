import "./App.css";
import SearchResults from "./components/SearchResults";

function App() {
    const tracks = [
        { name: "Back in Black", artist: "AC/DC", album: "Back in Blank" },
        { name: "You Shook Me All Night Long", artist: "AC/DC", album: "Back in Black" },
        { name: "Highway to Hell", artist: "AC/DC", album: "Highway to Hell" },
        { name: "Thunderstruck", artist: "AC/DC", album: "The Razors Edge" },
    ];
    return (
        <div>
            <SearchResults SearchResults={tracks}/></div>
    )
}
export default App;
