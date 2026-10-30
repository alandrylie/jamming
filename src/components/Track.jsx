function Track(props) {
    if (!props.track) return <p>No track found</p>;

    return (
        <div>
            <p>{props.track.name}</p>
            <p>{props.track.artist}</p>
            <p>{props.track.album}</p>
        </div>
    );
}

export default Track;
