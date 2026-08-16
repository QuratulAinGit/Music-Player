import "../styles/Visualizer.css";

const BAR_COUNT = 24;

export default function Visualizer({ isPlaying }) {
  return (
    <div
      className={`visualizer${isPlaying ? " visualizer--active" : ""}`}
      aria-hidden="true"
    >
      {Array.from({ length: BAR_COUNT }).map((_, index) => (
        <span key={index} style={{ "--i": index }} />
      ))}
    </div>
  );
}
