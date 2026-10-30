import TrackList from "./TrackList";

function SearchResults(props) {
    
    return (
        <div>
            <h2>Search Results</h2>
            <TrackList tracks={props.SearchResults}  addTrack={props.addTrack}/>
        </div>
    );
}
export default SearchResults;