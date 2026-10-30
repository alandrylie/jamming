import TrackList from "./TrackList.jsx";

function Playlist(props) {
    return (
        <div>
            <div>
                <h2>Play list</h2>
                <form>
                    <label htmlFor="playlistName">Playlist Name</label>
                    <input
                        type="text"
                        id="playListName"
                        value={props.playlistName}
                        onChange={props.handleUserInput}
                    />
                    <button type="submit">Save Playlist</button>
                </form>
            </div>

            <div>
                <TrackList tracks={props.TrackList} removeTrack={props.removeTrack} isRemoval={true} />
            </div>
        </div>
    );
}

export default Playlist;
