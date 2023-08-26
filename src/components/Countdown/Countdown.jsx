import { useEffect, useState } from "react";
import "./countdown.css";

function Countdown() {
  const totalSeconds = 24 * 60 * 60;

  const [targetSeconds, setTargetSeconds] = useState(totalSeconds);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(function () {
    setElapsedSeconds(0);
    let interval = setInterval(function () {
      setElapsedSeconds((elapsedSeconds) => elapsedSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const secondsRemaining = targetSeconds - elapsedSeconds;
  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;

  return (
    <>
      <div className="countdown">
        {targetSeconds !== 0 ? (
            <p>
            {hours}:{minutes}:{seconds}
            </p>
        ) : (
            <>
            <p>Terminó el conteo</p>
            <button onClick={() => setTargetSeconds(totalSeconds)}>Reiniciar</button>
            </>
        )}
      </div>
    </>
  );
}

export default Countdown;
