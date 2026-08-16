# Audio files go here

Place your 6 mp3 files in this folder, named exactly like this:

```
public/audio/track-1.mp3
public/audio/track-2.mp3
public/audio/track-3.mp3
public/audio/track-4.mp3
public/audio/track-5.mp3
public/audio/track-6.mp3
```

To rename a track's title or artist as shown in the app, edit
`src/data/tracks.js` — the `src` field must keep matching the filename
you use here.

Want different filenames instead of renaming your mp3s? Just update the
`src` path for that track in `src/data/tracks.js` to match, e.g.
`/audio/my-song.mp3`.
