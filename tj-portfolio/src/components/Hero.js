import PulsingCircles from './PulsingCircles';

function Hero() {
  return (
    <div className="flex flex-col mt-24 md:mt-48 text-white">
      <div className="flex justify-center items-end ">
        <img
          className="rounded-full"
          src="/b-w-tj.png"
          width={80}
          height={80}
          alt="tj-pic"
        />
        <div className="text-4xl md:text-3xl">Tim Johnson</div>
      </div>
      <div className="text-slate-300 text-2xl md:text-xl md:tracking-[widest]">
        Frontend Web Developer <PulsingCircles />
      </div>
      {/* Add Projects */}
      <div>{/* Project 1 */}</div>
      <div>{/* Project 2 */}</div>
      <div>{/* Project 3 */}</div>
    </div>
  );
}

export default Hero;
