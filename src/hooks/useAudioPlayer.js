import { useEffect, useRef, useState } from "react";

export function useAudioPlayer(tracks) {
  const audioRef = useRef(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [hasError, setHasError] = useState(false);

  const currentTrack = tracks[trackIndex];

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    audioRef.current.volume = volume;
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    setHasError(false);
    setCurrentTime(0);
    audio.src = currentTrack.src;

    if (isPlaying) {
      audio.play().catch(() => setHasError(true));
    }
  }, [trackIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    function handleTimeUpdate() {
      setCurrentTime(audio.currentTime);
    }
    function handleLoadedMetadata() {
      setDuration(audio.duration || 0);
    }
    function handleEnded() {
      playNext();
    }
    function handleError() {
      setHasError(true);
      setIsPlaying(false);
    }

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, [trackIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setHasError(true));
    }
  }

  function playTrack(index) {
    setTrackIndex(index);
    setIsPlaying(true);
  }

  function playNext() {
    setTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  }

  function playPrevious() {
    setTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
  }

  function seek(time) {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }

  return {
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
  };
}
