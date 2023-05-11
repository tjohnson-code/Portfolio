import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

const projects = [
  {
    name: 'Pixel Draw',
    id: 1,
    img: '/pixeldraw.png',
    description:
      'Pixel Draw is my version of an Etch-a-sketch. The technologies I used for this project were: HTML, CSS, and JavaScript.',
    url: 'https://tjohnson-code.github.io/Portfolio/pixeldraw/index.html',
    git: 'https://github.com/tjohnson-code/Portfolio/tree/main/pixeldraw',
  },
  {
    name: 'Pixel Draw',
    id: 2,
    img: '/pixeldraw.png',
    description: 'Here is project 1 and some info',
    url: 'https://www.webdevtj.com',
    git: 'https://www.webdevtj.com',
  },
  {
    name: 'Pixel Draw',
    id: 3,
    img: '/pixeldraw.png',
    description: 'Here is project 1 and some info',
    url: 'https://www.webdevtj.com',
    git: 'https://www.webdevtj.com',
  },
  {
    name: 'Pixel Draw',
    id: 4,
    img: '/pixeldraw.png',
    description: 'Here is project 1 and some info',
    url: 'https://www.webdevtj.com',
    git: 'https://www.webdevtj.com',
  },
];

function Projects() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 m-12">
      {projects.map(project => (
        <div
          key={project.id}
          className="m-3 sm:m-6 bg-slate-500 text-slate-700 border-y-2 rounded-xl border-amber-600/50 sm:p-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col border-x rounded-xl border-sky-800/50 p-2">
              <p className="text-center font-bold">{project.name}</p>
              <Image
                className="h-auto w-auto"
                src={project.img}
                alt={project.name}
                width={350}
                height={350}
                priority
              />
              <div className="flex justify-between">
                <SocialIcon
                  className="nav-hover"
                  url={project.git}
                  target="_blank"
                  bgColor="transparent"
                  fgColor="#927b6c"
                  width={24}
                  height={24}
                />

                <SocialIcon
                  className="nav-hover"
                  url={project.url}
                  target="_blank"
                  bgColor="transparent"
                  fgColor="#927b6c"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="hidden sm:flex justify-center items-center border-x rounded-xl border-sky-800/50 p-2">
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
