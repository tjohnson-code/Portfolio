import PulsingCircles from './PulsingCircles';

function Hero() {
  return (
    <div className="flex flex-col text-slate-700">
      {/* Intro */}
      <div className="flex flex-row justify-center items-center text-4xl md:text-3xl">
        <img
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/42911861?v=4"
          width={60}
          height={60}
          alt=""
        />
        Tim Johnson
      </div>
      <div className="flex"></div>
      <div className="text-slate-600 text-2xl md:text-xl md:tracking-widest">
        Frontend Web Developer <PulsingCircles />
      </div>

      <div>{/* Project 1 */}</div>
      <div>{/* Project 2 */}</div>
      <div>{/* Project 3 */}</div>
    </div>
  );
}

export default Hero;
