import VinylDisc from "./components/VinylDisc.jsx";
import PlayerControls from "./components/PlayerControls.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import VolumeControl from "./components/VolumeControl.jsx";
import Playlist from "./components/Playlist.jsx";
import Visualizer from "./components/Visualizer.jsx";
import { useAudioPlayer } from "./hooks/useAudioPlayer.js";
import { tracks } from "./data/tracks.js";
import "./styles/App.css";

export default function App() {
  const {
    currentTrack,
    trackIndex,
    isPlaying,
    currentTime,
    duration,
    volume,
    hasError,
    togglePlay,
    playTrack,
    playNext,
    playPrevious,
    seek,
    setVolume
  } = useAudioPlayer(tracks);

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar__brand">
          <span className="sidebar__brand-mark">TT</span>
          <div>
            <span className="sidebar__brand-name">The Turntable</span>
            <span className="sidebar__brand-tag">Side A · Home Session</span>
          </div>
        </div>

        <Playlist
          tracks={tracks}
          activeIndex={trackIndex}
          isPlaying={isPlaying}
          onSelect={playTrack}
        />

        <div className="sidebar__footer">
          <span>Drop mp3 files in</span>
          <code>public/audio</code>
        </div>
      </aside>

      <main className="stage">
        <header className="stage__topbar">
          <span className="stage__topbar-label">Now Playing</span>
          <span className="stage__topbar-count">
            {String(trackIndex + 1).padStart(2, "0")} /{" "}
            {String(tracks.length).padStart(2, "0")}
          </span>
        </header>

        <div className="stage__center">
          <VinylDisc
            title={currentTrack.title}
            artist={currentTrack.artist}
            isPlaying={isPlaying}
            hasError={hasError}
          />

          <section className="stage__now-playing">
            <span className="stage__now-title">{currentTrack.title}</span>
            <span className="stage__now-artist">{currentTrack.artist}</span>
          </section>

          <Visualizer isPlaying={isPlaying} />
        </div>

        <div className="stage__deck">
          <ProgressBar
            currentTime={currentTime}
            duration={duration}
            onSeek={seek}
          />

          <div className="stage__deck-row">
            <VolumeControl volume={volume} onChange={setVolume} />

            <PlayerControls
              isPlaying={isPlaying}
              onPlayPause={togglePlay}
              onNext={playNext}
              onPrevious={playPrevious}
            />

            <span className="stage__deck-spacer" />
          </div>
        </div>
      </main>
    </div>
  );
}
