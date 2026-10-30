function Track(props) {
    if (!props.track) return <p>No track found</p>;

    return (
        <div>
            <p>Song Name: {props.track.name}</p>
            <p>Artist: {props.track.artist}</p>
            <p>Album: {props.track.album}</p>
            {props.isRemoval ? (
                <button onClick={() => props.removeTrack(props.track)}> - </button>
            ) : (
                <button onClick={() => props.addTrack(props.track)}> + </button>
            )}
        </div>
    );
}

export default Track;
