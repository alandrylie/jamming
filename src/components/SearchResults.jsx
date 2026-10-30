import TrackList from "./TrackList";

function SearchResults(props) {
    
    return (
        <div className="panel">
            <h2>Search Results</h2>
            <TrackList tracks={props.SearchResults}  addTrack={props.addTrack}/>
        </div>
    );
}
export default SearchResults;