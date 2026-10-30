  # Jammming

  ** Live Demo **  **Live demo:** https://jamming-biv4.onrender.com/ 

  A React app for searching songs and building a playlist.
  Built as a Codecademy Full Stack Engineer portfolio project.

  ## Technologies
  - React 19 + Vite
  - JavaScript, JSX
  - iTunes Search API (GET)
  - JSONPlaceholder (POST)
 

  ## Features
  - Search for songs by name or artist
  - Add songs to a playlist (+), with no duplicates
  - Remove songs from the playlist (-)
  - Rename the playlist
  - Save the playlist (POST request), then reset

  ## Future work
  - Play 30-second song previews (iTunes previewUrl)
  - Hide songs already in the playlist from the search results
  - Show a loading message while saving
  - Save to a real database (e.g. Firebase)
  - Add a reset button for the search and playlist.

  ## Api 
  - token uses the iTunes Search API instead of Spotify. iTunes needs no access token or login, so the "Obtain a Spotify Access Token" step isn't needed.

  ## Testing 


| Test | Steps | Expected | Result |
| ---- | ---- | ---- | ---- |
| **Search** | Type "acdc" press search | AC/DC songs appear | :white_check_mark: |
| **Add (+)** | Click the (+) icon on a song, then try adding it again | Song is added to playlist; duplicate alert appears on second attempt | :white_check_mark: |
| **Remove (-)** | Click the (-) icon on a song | Song is removed from playlist | :white_check_mark: |
| **Rename** | Click the title, type new name, and save | Playlist reflects the new name | :white_check_mark: |
| **Save** | Click save, | Playlist changes are saved; interface clears back to default | :white_check_mark: |


## Styling
  (App.css) written with AI assistance; all React Components and logic written by me.

