# Filip Altankov- Concordia Bootcamps Final project 2023

## Project name : BPM

This is a full stack application using React & node.js therefore it will require 2 terminals to run.

Navigate to the backend and do npm install, open another terminal and do the same for the frontend.

To run the project, once the package.json has been installed, start it up with npm start on the frontend and again for the backend.

Video showcase: [BPM project showcase](youtube.com)

## Features:

- **Mobile**: The app is full available for mobile users and also allows for different size monitors to display the information using media queries.
- **Database**: The application uses mongoDB, certain .env files are required to store the data.
- **Login** : The application uses the auth0 api, certain .env files are required to run.

  ![LoginPicture](./readme%20Assets/login.png)

- **Search**: The application uses Deezer's api to lookup and obtain 25 of the closest matches to the search query received.

  ![Search](./readme%20Assets/search.png)

- **QueryInformation** : Once the user has selected an item, it will be redirected to a page containing the song's name, the artist, a small preview of the song, the album name, the comment section, like & add to playlist feature.

  ![Search Results](./readme%20Assets/Query%20Information.gif)

- **Song Preview**: A small 30 second sample is provided.

![Song Preview](./readme%20Assets/Song%20Preview.gif)

- **Artist Page** : A page showing the artist's top 50 songs.

![Artist Page](./readme%20Assets/Artist%20tracks.gif)

- **Album Page** : A page showing all of the songs on the album.

![Album tracks](./readme%20Assets/Album%20tracks.gif)

- **Sidebar**: A retractable sidebar on the left side, that shows the menu/options available to the user depending on if they are logged in.

- Logged Out: ![Sidebar](./readme%20Assets//Sidebar.gif)

- Logged In: ![Loggedin Sidebar](./readme%20Assets/Logged%20In%20Sidebar.gif)

-- **THE FEATURES BELOW ARE ONLY AVAILABLE TO THE USER IF THEY ARE LOGGED IN.** --

- **Liked songs, Playlist view**: The user can view all of the liked songs they have added, and/or view a specific playlist's songs containing the songs they have added.

![Playlist](./readme%20Assets/Playlists.gif)

- **LikeButton** : The user can like songs and add them to the "Liked songs Playlist"

![LikeButton](./readme%20Assets/Liked%20Song.gif)

- **Comments**: The user can add their comments to the song.

![Comments](./readme%20Assets//Comments.gif)

- **Playlists**: The user can add the currently selected song to their existing playlist, or create a new one.
  ![Createplaylist](./readme%20Assets/AddCreate%20Playlist.gif)
