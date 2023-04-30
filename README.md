# Filip Altankov- Concordia Bootcamps Final project 2023

## Project name : BPM

This is a full stack application using React therefore it will require 2 terminals to run.

Navigate to the backend and do npm install, open another terminal and do the same for the frontend.

To run the project, once the package.json has been installed, start it up with npm start on the frontend and again for the backend.

Video showcase: [BPM project showcase](someplace.com)

## Features:

- **Mobile**: The app is full available for mobile users and also allows for different size monitors to display the information using media queries.
- **Login** : The application uses the auth0 api, certain .env files are required to run.
- **Database**: The application uses mongoDB, certain .env files are required to store the data.
- **Search**: The application uses Deezer's api to lookup and obtain 25 of the closest matches to the search query received.
- **QueryInformation** : Once the user has selected an item, it will be redirected to a page containing the song's name, the artist, a small preview of the song, the album name, the comment section, like & add to playlist feature.
- **Artist Page** : A page showing the artist's top 50 songs.
- **Album Page** : A page showing all of the songs on the album.
- **Sidebar**: A retractable sidebar on the left side, that shows the menu/options available to the user depending on if they are logged in.

-- **THE FEATURES BELOW ARE ONLY AVAILABLE TO THE USER IF THEY ARE LOGGED IN.** --

- **LikeButton** : The user can like songs and add them to the "Liked songs Playlist"
- **Comments**: The user can add their comments to the song.
- **Playlists**: The user can add the currently selected song to their existing playlist, or create a new one.
- **Liked songs, Playlist view**: The user can view all of the liked songs they have added, and/or view a specific playlist's songs containing the songs they have added.
