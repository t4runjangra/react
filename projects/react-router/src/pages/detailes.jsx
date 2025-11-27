import React from "react";

function Detail() {
  return (
    <section className="w-full h-screen bg-gray-900 text-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          Detail Page
        </h1>
        <p className="text-gray-300 mb-3">
          This page can be used to show detailed information about a specific item or topic.
        </p>
        <p className="text-gray-400 text-sm">
          Customize this component with more content and navigation details as needed.
        </p>
      </div>
    </section>
  );
}

export default Detail;
