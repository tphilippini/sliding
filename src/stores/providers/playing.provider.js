import React, { useState, useMemo, useEffect } from "react";
import IsPlayingContext from "../contexts/playing.context";

const IsPlayingProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const value = useMemo(() => ({ isPlaying, setIsPlaying }), [
    isPlaying,
    setIsPlaying,
  ]);

  useEffect(() => {
    if (localStorage.APP_IS_PLAYING) {
      const ip = localStorage.APP_IS_PLAYING === "true" ? true : false;
      setIsPlaying(ip);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <IsPlayingContext.Provider value={value}>
      {children}
    </IsPlayingContext.Provider>
  );
};

export default IsPlayingProvider;
