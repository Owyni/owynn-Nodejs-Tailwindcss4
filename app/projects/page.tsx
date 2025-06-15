import React from "react";
import Footer from "../components/footer";

const projects = [
  {
    title: "Minecraft Sheeps Simulator",
    description:
      "A python program that simulates the sheeps reproduction in Minecraft, with the EDO explaining how it works.",
    link: "https://github.com/Owyni/Proyecto-Ecuaciones-Diferenciales",
    image: "/ovejas.jpg",
  },
  {
    title: "My School App",
    description:
      "A simple app that helps teachers in my school to take attendance. Its a Java / MySql project in process.",
    link: "https://github.com/Owyni/UVAQ-app",
    image: "/uvaq_app.jpg",
  },
  {
    title: "Simple Web Portfolio",
    description:
      "I use this portfolio to show my HTML / JavaScript / CSS skills, is clean and simple code.",
    link: "https://github.com/Owyni/Owyni.github.io",
    image: "/old_portfolio.jpg",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gray-800 mb-10 drop-shadow-lg p-2">
          My Projects
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#403d53] text-[#ceec1f] border border-cyan-900/40 rounded-2xl shadow-xl p-8 flex flex-col justify-between hover:scale-[1.03] hover:shadow-cyan-700/30 transition-all duration-300 backdrop-blur-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4 border border-cyan-900/20 bg-[#f2f5d5]"
              />
              <h2 className="text-2xl font-bold text-pale mb-3 drop-shadow">
                {project.title}
              </h2>
              <p className="text-[#f3f3d4] font-sans p-2">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto px-5 py-2 rounded-lg bg-gradient-to-r from-[#7d2f72] to-[#f2825d] font-semibold shadow hover:from-[#146764] hover:to-[#cdf511] hover:text-black transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
