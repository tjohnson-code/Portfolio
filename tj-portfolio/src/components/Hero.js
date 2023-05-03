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

function Hero() {
  return (
    <div className="text-slate-800 pt-24">
      {/* Flex Column */}
      <div>
        {/* Intro */}
        <h1 className="relative text-2xl">
          <span className="relative z-20">
            Hi, I'm Tim Johnson a Frontend Developer
          </span>{' '}
          <span className="relative inline-block">
            <div
              className="absolute bg-cyan-800 rounded-full z-10"
              style={bgCircle1}
            ></div>
            <div
              className="absolute bg-red-950 rounded-full z-10"
              style={bgCircle2}
            ></div>
            <div
              className="absolute bg-amber-800 rounded-full z-10"
              style={bgCircle3}
            ></div>
          </span>
        </h1>
      </div>
      <div>{/* Project 1 */}</div>
      <div>{/* Project 2 */}</div>
      <div>{/* Project 3 */}</div>
    </div>
  );
}

export default Hero;
