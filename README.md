# RhythmCheck 🎵

**RhythmCheck** is a web application that lets users connect their Spotify account to explore their recently played tracks, top artists, playlists, and even manage them. Built with **Angular 16** for the frontend and **Laravel 10** for the backend, it leverages Spotify's API to deliver a seamless music management experience.


## Features ✨
- **Spotify Login:** Securely connect your Spotify account.
- **Recently Played Tracks:** View your latest listening history.
- **Top Artists:** Discover your most-streamed artists.
- **Playlist Management:** Browse, organize, and edit your playlists.
- **User-Centric Design:** Tailored to enhance your music experience.


## Tech Stack ⚙️
- **Frontend:** Angular 16
- **Backend:** Laravel 10
- **Spotify API:** For data retrieval and user interaction
- **Database:** MySQL
- **Deployment:** (To be updated)


## Installation 🛠️

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Composer](https://getcomposer.org/)
- [PHP](https://www.php.net/) (8.1 or higher)
- [MySQL](https://www.mysql.com/)
- [Angular CLI](https://angular.io/cli)

### Steps
1. Clone the repository:

    `git clone https://github.com/AngelGarciaAguilera/rhythm-check.git`

    `cd rhythm-check`

2. Set up the **backend**:

    `cd backend`

    `composer install`

    `cp .env.example .env`

    `php artisan key:generate`

    `php artisan migrate`

3. Set up the **frontend**:

    `cd ../frontend`

    `npm install`

    `ng serve`

4. Configure your Spotify Developer credentials:
   - Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).
   - Create an application and get your `Client ID` and `Client Secret`.
   - Update the `.env` file in the backend with these credentials.

5. Run both frontend and backend servers.


## Usage 🚀
1. Open the application in your browser.
2. Log in with your Spotify account.
3. Start exploring your music data and managing playlists!


## Contributing 🤝
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m "Add YourFeature"`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a pull request.


## License 📜
This project is licensed under the [MIT License](LICENSE).


## Acknowledgments 🙌
- Thanks to [Spotify](https://www.spotify.com) for providing the API.
- Built with using Angular, Laravel, and Spotify API.
