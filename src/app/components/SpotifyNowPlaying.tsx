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
    return <p>Error: {error}</p>;
  }

  if (!song || !song.isPlaying) {
    return <p>Not playing anything right now.</p>;
  }

  return (
    <div className="spotify-now-playing">
      <img src={song.albumCover} alt={song.name} width={50} height={50} />
      <div>
        <p>{song.name}</p>
        <p>{song.artist}</p>
      </div>
    </div>
  );
};

export default SpotifyNowPlaying;