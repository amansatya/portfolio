import React from "react";

const Hero = () => {
    return (
        <section id="hero" className="w-full min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl flex flex-col items-center text-center gap-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Hi, I'm <span className="text-blue-500">Satya Aman</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-xl">
                    A Full Stack Developer crafting intuitive web experiences using MERN, Python, and modern tools.
                </p>
                <div className="flex gap-4 mt-4">
                    <a href="#resume" className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                        View Resume
                    </a>
                    <a href="#contact" className="px-6 py-3 rounded-md border border-gray-500 text-gray-200 font-medium hover:bg-gray-800 transition">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;