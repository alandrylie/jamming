import TrackList from "./TrackList";

function SearchResults(props) {
    
    return (
        <div>
            <TrackList tracks={props.SearchResults} />
        </div>
    );
}
export default SearchResults;