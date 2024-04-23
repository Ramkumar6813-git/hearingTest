import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const leftSideAudioFiles = [
  "/src/assets/250 L.wav",
  "/src/assets/500 L.wav",
  // "/src/assets/1000 L.wav",
  // "/src/assets/2000 L.wav",
  // "/src/assets/4000 L.wav",
];
const rightSideAudioFiles = [
  "/src/assets/250 R.wav",
  "/src/assets/500 R.wav",
  // "/src/assets/1000 R.wav",
  // "/src/assets/2000 R.wav",
  // "/src/assets/4000 R.wav",
];

function AudioPlayer({ setAudioIndexPosition, setLeftSideAudioPlaying }) {
  const [leftSideTest, setLeftSideTest] = useState(true);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [audioIndex, setAudioIndex] = useState(0);
  const [volume, setVolume] = useState(0.2);
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    setAudioIndexPosition(audioIndex);
    setLeftSideAudioPlaying(leftSideTest);
    if (audioIndex > 0) {
      handleStart();
    }
  }, [audioIndex]);

  useEffect(() => {
    audioRef.current = leftSideTest
      ? new Audio(leftSideAudioFiles[audioIndex])
      : new Audio(rightSideAudioFiles[audioIndex]);
    if (!leftSideTest) {
      handleStart();
    }
  }, [leftSideTest]);

  let intervalRef = useRef();

  const handleStart = () => {
    audioRef.current.load();
    intervalRef.current = setInterval(() => {
      setVolume((prevVolume) => {
        if (prevVolume < 1) {
          audioRef.current.play();
          audioRef.current.volume = prevVolume;
          return prevVolume + 0.2;
        }
        handleStop();
      });
    }, 2000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    audioRef.current.pause();
    if (audioIndex < leftSideAudioFiles.length - 1) {
      setAudioIndex((prevIndex) => prevIndex + 1);
      setVolume(0.2);
    } else {
      setLeftSideTest(!leftSideTest);
      setAudioIndex(0);
      setVolume(0.2);
      const url = new URL(audioRef.current.src);
      const pathname = url.pathname;
      const filename = pathname.split("/").pop();
      if (filename === "250%20R.wav") {
        setLeftSideTest(false);
        alert("test is Completed");
        navigate("/results");
      }
    }
  };

  return (
    <div className="bg-violet-500 py-5 flex justify-center">
      <button
        type="button"
        className="bg-gradient-to-tr from-sky-400 to-blue-500 px-4 rounded-lg py-1 text-xl text-white mr-5"
        onClick={handleStart}
      >
        Start
      </button>
      <button
        type="button"
        className="bg-gradient-to-tr from-pink-600 to-violet-400 px-4 rounded-lg py-1 text-xl text-white"
        onClick={handleStop}
      >
        I Heard it
      </button>
    </div>
  );
}

AudioPlayer.propTypes = {
  setAudioIndexPosition: PropTypes.func,
  setLeftSideAudioPlaying: PropTypes.func,
};

export default AudioPlayer;
