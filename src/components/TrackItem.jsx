import "../styles/TrackItem.css";

export default function TrackItem({ track, index, isActive, isPlaying, onSelect }) {
  return (
    <li>
      <button
        type="button"
        className={`track-item${isActive ? " track-item--active" : ""}`}
        onClick={onSelect}
      >
        <span
          className="track-item__cover"
          style={{ "--hue": `${(index * 47) % 360}deg` }}
        >
          {isActive && isPlaying ? (
            <span className="track-item__bars">
              <span />
              <span />
              <span />
            </span>
          ) : (
            <span className="track-item__cover-index">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </span>
        <span className="track-item__info">
          <span className="track-item__title">{track.title}</span>
          <span className="track-item__artist">{track.artist}</span>
        </span>
        <svg
          className="track-item__play"
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="currentColor"
        >
          <path d="M8 5v14l12-7z" />
        </svg>
      </button>
    </li>
  );
}
