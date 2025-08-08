import { useEffect, useState } from "react";

const SpotifyNowPlaying = () => {
  const [song, setSong] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      try {
        const response = await fetch("/api/spotify");
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setSong(data);
      } catch (err) {
        console.error("Failed to fetch currently playing song:", err);
        setError(err.message);
      }
    };

    fetchCurrentlyPlaying();

    const interval = setInterval(fetchCurrentlyPlaying, 10000);
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!song || !song.isPlaying) {
    return (
      <div className="p-4 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Not playing anything right now.
        </p>
      </div>
    );
  }

  return (
    <div
      className="relative flex flex-row items-center gap-3 p-4 rounded-lg shadow-md bg-gradient-to-r from-green-400 to-blue-500"
      style={{
        width: "600px",
        height: "100px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-2 right-2">
        <img
          src="/images/spotify.png"
          alt="Spotify Logo"
          className="w-5 h-5"
        />
      </div>

      <div className="flex-shrink-0 ml-2">
        <a href={song.url} target="_blank" rel="noopener noreferrer">
          <img
            src={song.albumCover}
            alt={song.name}
            width={70}
            height={70}
            className="rounded-lg shadow-lg object-cover"
          />
        </a>
      </div>

      <div className="flex-1 flex flex-col justify-center ml-3">
        <div>
          <h3 className="text-md font-bold text-white">
            <a href={song.url} target="_blank" rel="noopener noreferrer">
              {song.name}
            </a>
          </h3>
          <h4 className="text-sm text-gray-300">
            <a href={song.artistUrl} target="_blank" rel="noopener noreferrer">
              {song.artist}
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SpotifyNowPlaying;