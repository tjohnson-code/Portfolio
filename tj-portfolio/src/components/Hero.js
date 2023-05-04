import PulsingCircles from './PulsingCircles';
import Image from 'next/image';

function Hero() {
  return (
    <div className="flex flex-col mt-24 text-white">
      <div className="flex justify-center items-end">
        <Image
          className="rounded-full w-24 h-24"
          src="/b-w-tj.png"
          width={'80'}
          height={'80'}
          priority
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
