import {
  siHtml5,
  siCss3,
  siJavascript,
  siReact,
  siTailwindcss,
  siNextdotjs,
  siVercel,
} from 'simple-icons';

const skillIcons = [
  { name: 'HTML5', icon: siHtml5 },
  { name: 'CSS3', icon: siCss3 },
  { name: 'JavaScript', icon: siJavascript },
  { name: 'React', icon: siReact },
  { name: 'Tailwind CSS', icon: siTailwindcss },
  { name: 'Next.js', icon: siNextdotjs },
  { name: 'Vercel', icon: siVercel },
];

function Skills() {
  return (
    <div className="flex space-x-2">
      {skillIcons.map((skill, index) => (
        <svg
          key={index}
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
      ))}
    </div>
  );
}

export default Skills;
