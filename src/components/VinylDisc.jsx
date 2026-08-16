import "../styles/VinylDisc.css";

export default function VinylDisc({ title, artist, isPlaying, hasError }) {
  return (
    <div className="vinyl">
      <div className="vinyl__tonearm-mount">
        <div
          className={`vinyl__tonearm${isPlaying ? " vinyl__tonearm--down" : ""}`}
        >
          <div className="vinyl__tonearm-head" />
        </div>
      </div>

      <div
        className={`vinyl__disc${isPlaying ? " vinyl__disc--spinning" : ""}`}
      >
        <div className="vinyl__grooves" />
        <div className="vinyl__label">
          <span className="vinyl__label-title">{title}</span>
          <span className="vinyl__label-artist">{artist}</span>
        </div>
      </div>

      {hasError && (
        <p className="vinyl__error">
          Couldn't load this track. Check the audio file in{" "}
          <code>public/audio</code>.
        </p>
      )}
    </div>
  );
}
