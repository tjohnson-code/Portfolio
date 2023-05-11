import PulsingCircles from './PulsingCircles';
import Image from 'next/image';
import Skills from './Skills';

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center text-white">
      <div className="flex items-end">
        <Image
          className="rounded-full w-36 h-36"
          src="/b-w-tj.png"
          width={'200'}
          height={'200'}
          priority
          alt="tj-pic"
        />
        <div className="text-3xl">Tim Johnson</div>
      </div>
      <div className="text-slate-300 text-xl tracking-widest">
        Front-End Web Developer <PulsingCircles />
      </div>
      <div className="flex justify-center p-3">
        <Skills />
      </div>
    </div>
  );
}

export default Hero;
