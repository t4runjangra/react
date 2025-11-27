import React from "react";

function Home() {
  return (
    <section className="w-full h-screen bg-gray-900 text-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          Home Page
        </h1>
        <p className="text-gray-300 mb-3">
          Welcome to the homepage of this minimal React + Tailwind CSS project.
        </p>
        <p className="text-gray-400 text-sm">
          Navigate through different pages to explore more features and content.
        </p>
      </div>
    </section>
  );
}

export default Home;
