import "../styles/VolumeControl.css";

export default function VolumeControl({ volume, onChange }) {
  return (
    <div className="volume-control">
      <svg
        viewBox="0 0 24 24"
        width="15"
        height="15"
        fill="currentColor"
        className="volume-control__icon"
      >
        <path d="M4 9v6h4l5 5V4L8 9H4zm11.5 3a4.5 4.5 0 0 0-2-3.74v7.48A4.5 4.5 0 0 0 15.5 12z" />
      </svg>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(event) => onChange(Number(event.target.value))}
        className="volume-control__slider"
        style={{ "--volume": `${volume * 100}%` }}
        aria-label="Volume"
      />
    </div>
  );
}
