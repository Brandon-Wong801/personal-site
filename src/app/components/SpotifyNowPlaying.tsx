import { useEffect, useState } from "react";

const SpotifyNowPlaying = () => {
  const [song, setSong] = useState(null);

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      const response = await fetch("/api/spotify");
      const data = await response.json();
      setSong(data);
    };

    fetchCurrentlyPlaying();
  }, []);

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