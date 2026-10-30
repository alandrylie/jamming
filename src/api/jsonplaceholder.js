export async function savePlaylist(name, tracks) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: name,
            trackIds: tracks.map((track) => track.id)
        })
    });
    if (!response.ok) throw new Error("Timeout Try again later!");
    return response.json();
}
