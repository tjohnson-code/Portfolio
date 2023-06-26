import { useState } from 'react';
import {
  siHtml5,
  siCss3,
  siJavascript,
  siTypescript,
  siReact,
  siTailwindcss,
  siNextdotjs,
  siVercel,
} from 'simple-icons';

const skillIcons = [
  { name: 'HTML5', icon: siHtml5 },
  { name: 'CSS3', icon: siCss3 },
  { name: 'JavaScript', icon: siJavascript },
  { name: 'Typescript', icon: siTypescript },
  { name: 'React', icon: siReact },
  { name: 'Tailwind', icon: siTailwindcss },
  { name: 'Next.js', icon: siNextdotjs },
];

function Skills() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div>
      <div className="flex space-x-2">
        {skillIcons.map((skill, index) => (
          <div className="relative group" key={index}>
            <svg
              onMouseEnter={() => setHoveredIcon(skill.name)}
              onMouseLeave={() => setHoveredIcon(null)}
              className="nav-hover cursor-pointer rounded-full border-2 border-amber-600"
              viewBox="0 0 24 24"
              fill={skill.icon.hex}
              opacity={0.5}
              width={28}
              height={28}
              xmlns="https:/www.w3.org/2000/svg"
            >
              <path d={skill.icon.path} />
            </svg>
            <span
              className={`absolute w-full text-center top-full mt-2 transition-opacity duration-200 ${
                hoveredIcon === skill.name ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
