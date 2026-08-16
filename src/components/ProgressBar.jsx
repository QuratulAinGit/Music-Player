import { formatTime } from "../utils/formatTime.js";
import "../styles/ProgressBar.css";

export default function ProgressBar({ currentTime, duration, onSeek }) {
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="progress-bar">
      <span className="progress-bar__time">{formatTime(currentTime)}</span>
      <input
        className="progress-bar__track"
        type="range"
        min={0}
        max={duration || 0}
        value={currentTime}
        step={0.1}
        onChange={(event) => onSeek(Number(event.target.value))}
        style={{ "--progress": `${progress}%` }}
        aria-label="Seek"
      />
      <span className="progress-bar__time">{formatTime(duration)}</span>
    </div>
  );
}
