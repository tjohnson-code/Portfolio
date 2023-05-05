import PulsingCircles from './PulsingCircles';
import Image from 'next/image';
import Skills from './Skills';

function Hero() {
  return (
    <div className="flex flex-col mt-24 text-white">
      <div className="flex items-end">
        <Image
          className="rounded-full w-24 h-24"
          src="/b-w-tj.png"
          width={'200'}
          height={'200'}
          priority
          alt="tj-pic"
        />
        <div className="text-4xl md:text-3xl">Tim Johnson</div>
      </div>
      <div className="text-slate-300 text-2xl md:text-xl md:tracking-[widest]">
        Frontend Web Developer <PulsingCircles />
      </div>
      <div className="flex justify-center p-3">
        <Skills />
      </div>
    </div>
  );
}

export default Hero;
