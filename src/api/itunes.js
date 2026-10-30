export async function searchTracks(term) {
    //term matches what itunes api uses ?term=acdc if I searched for acdc.
    const response = await fetch(`https://itunes.apple.com/search?term=${term}&entity=song`);
    if(!response.ok) throw new Error("Timeout Try again later!")
    const data = await response.json();
    return data.results.map((song) =>( {
        id: song.trackId,
        name: song.trackName,
        artist: song.artistName,
        album: song.collectionName,
        url: song.trackViewUrl,
    }));
}
