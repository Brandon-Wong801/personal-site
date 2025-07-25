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
      className="relative flex flex-col md:flex-row items-center gap-4 p-4 rounded-lg shadow-md"
      style={{
        width: "600px",
        height: "200px",
        // backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${song.albumCover})`,
        // backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex-shrink-0">
        <img
          src={song.albumCover}
          alt={song.name}
          width={80}
          height={80}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">{song.name}</h3>
          <h4 className="text-md text-gray-300">{song.artist}</h4>
        </div>
      </div>
    </div>
  );
};

export default SpotifyNowPlaying;