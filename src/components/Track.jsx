function Track(props) {
    if (!props.track) return <p>No track found</p>;

    return (
        <div className="track">
            <div>
                <p className="track-name">Song Name: {props.track.name}</p>
                <p className="track-info">Artist: {props.track.artist}</p>
                <p className="track-info">Album: {props.track.album}</p>
            </div>
            {props.isRemoval ? (
                <button onClick={() => props.removeTrack(props.track)}> - </button>
            ) : (
                <button onClick={() => props.addTrack(props.track)}> + </button>
            )}
        </div>
    );
}

export default Track;
