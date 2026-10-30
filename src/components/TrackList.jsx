import Track from './Track';

function TrackList(props) {
    const trackList = props.tracks.map((track, i) => <Track key={'track_' + i} track={track} addTrack={props.addTrack} />);

    return <div>{trackList}</div>;
}

export default TrackList;
