const Skills = () => {
    const skills = [
        "Flutter",
        "Dart",
        "State Management",
        "Responsive Design",
        "Api integration",
        "Firebase",
        "Node.js",
        "MongoDB",
        "REST Apis",
        "GraphQL",
    ]

  return (
    <div className=' flex gap-4 flex-wrap lg:w-2/3'>
        {skills.map((skill) => (
            <div key={skill} className="p-2 rounded flex bg-black text-white hover:bg-white hover:text-black">{skill}</div>
        ))}
    </div>
  )
}

export default Skills