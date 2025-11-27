import React from "react";

function About() {
  return (
    <section className="w-full h-screen bg-gray-900 text-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          About This Project
        </h1>
        <p className="text-gray-300 mb-3">
          A minimal React + Tailwind app built to practice clean UI, routing, and component-based design.
        </p>
        <p className="text-gray-400 text-sm">
          Made by Tarun, a second-year developer who likes keeping things simple, fast, and purposeful.
        </p>
      </div>
    </section>
  );
}

export default About;
