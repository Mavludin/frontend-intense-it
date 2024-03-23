import { useEffect, useRef, useState } from "react";

export const VideoPlayer = () => {
  const videoRef = useRef(null);
  const timerRef = useRef(0);

  const [played, setPlayed] = useState(false);

  const onPlay = () => {
    setPlayed(true);
  };

  const onStop = () => {
    setPlayed(false);
  };

  useEffect(() => {
    // videoRef.current.play();

    console.log("Монтирование");

    if (played) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }

    timerRef.current = setTimeout(() => {
      console.log("Сработало!!!");
    }, 3000);

    return () => {
      console.log("Размонтирование VideoPlayer");

      clearTimeout(timerRef.current);
    };
  }, [played]);

  return (
    <div>
      <h2>Video Player</h2>
      <div>
        <button onClick={onPlay}>Play</button>
        <button onClick={onStop}>Stop</button>
      </div>
      <video
        ref={videoRef}
        style={{ width: 200 }}
        // autoPlay
        //   loop
        muted
        controls
        src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
      />
    </div>
  );
};
