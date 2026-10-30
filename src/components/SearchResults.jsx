import TrackList from "./TrackList";

function SearchResults(props) {
    
    return (
        <div>
            <h2>Search Results</h2>
            <TrackList tracks={props.SearchResults} />
        </div>
    );
}
export default SearchResults;