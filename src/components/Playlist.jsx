import TrackItem from "./TrackItem.jsx";
import "../styles/Playlist.css";

export default function Playlist({ tracks, activeIndex, isPlaying, onSelect }) {
  return (
    <div className="playlist">
      <div className="playlist__heading-row">
        <span className="playlist__heading">Your Library</span>
        <span className="playlist__count">{tracks.length} tracks</span>
      </div>
      <ul className="playlist__list">
        {tracks.map((track, index) => (
          <TrackItem
            key={track.id}
            track={track}
            index={index}
            isActive={index === activeIndex}
            isPlaying={isPlaying}
            onSelect={() => onSelect(index)}
          />
        ))}
      </ul>
    </div>
  );
}
