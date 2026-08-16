import "../styles/PlayerControls.css";

export default function PlayerControls({
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious
}) {
  return (
    <div className="player-controls">
      <button
        type="button"
        className="player-controls__side"
        onClick={onPrevious}
        aria-label="Previous track"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M6 6h2v12H6zM10 12l9-6v12z" />
        </svg>
      </button>

      <button
        type="button"
        className="player-controls__main"
        onClick={onPlayPause}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M8 5v14l12-7z" />
          </svg>
        )}
      </button>

      <button
        type="button"
        className="player-controls__side"
        onClick={onNext}
        aria-label="Next track"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M16 6h2v12h-2zM5 6l9 6-9 6z" />
        </svg>
      </button>
    </div>
  );
}
