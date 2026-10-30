function Track(props) {
    if (!props.track) return <p>No track found</p>;

    return (
        <div>
            <p>Song Name: {props.track.name}</p>
            <p>Artist: {props.track.artist}</p>
            <p>Album: {props.track.album}</p>
            <button onClick={()=> props.addTrack(props.track)}>+</button>
        </div>
    );
}

export default Track;
