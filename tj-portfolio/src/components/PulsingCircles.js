import { useEffect, useState } from 'react';

const bgCircle1 = {
  width: '20px',
  height: '20px',
  transform: 'translate(-5%, -90%)',
};
const bgCircle2 = {
  width: '10px',
  height: '10px',
  transform: 'translate(-40%, -50%)',
};
const bgCircle3 = {
  width: '15px',
  height: '15px',
  transform: 'translate(-50%, -175%)',
};

function PulsingCircles() {
  const [animationDurations, setAnimationDurations] = useState([0, 0, 0]);

  useEffect(() => {
    const randomDurations = [
      Math.random() * 2 + 3,
      Math.random() * 2 + 3,
      Math.random() * 2 + 3,
    ];
    setAnimationDurations(randomDurations);
  }, []);

  return (
    <span className="relative inline-block">
      <div
        className="absolute bg-cyan-800 rounded-full z-10 pulseBright"
        style={{
          ...bgCircle1,
          animationDuration: `${animationDurations[0]}s`,
        }}
      ></div>

      <div
        className="absolute bg-red-950 rounded-full z-10 pulseBright"
        style={{
          ...bgCircle2,
          animationDuration: `${animationDurations[1]}s`,
        }}
      ></div>
      <div
        className="absolute bg-amber-800 rounded-full z-10 pulseBright"
        style={{
          ...bgCircle3,
          animationDuration: `${animationDurations[2]}s`,
        }}
      ></div>
    </span>
  );
}

export default PulsingCircles;
