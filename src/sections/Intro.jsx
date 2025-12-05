import React from "react";

const Intro = () => {
    return (
        <section
            id="intro"
            className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20"
        >

            <div className="flex flex-col gap-4 max-w-xl">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Satya Aman
                </h1>

                <h2 className="text-xl md:text-2xl font-medium text-gray-400">
                    Shaping ideas into elegant, scalable, impactful code.
                </h2>

                <p className="text-gray-300 leading-relaxed">
                    I am a Full Stack Developer specializing in MERN, Python, and modern
                    web technologies. I love building apps that are fast, intuitive, and
                    visually clean. Turning ideas into polished, production-ready products
                    is what I enjoy the most.
                </p>

                <div className="flex gap-6 mt-2">
                    <div>
                        <h3 className="text-white text-2xl font-semibold">10+</h3>
                        <p className="text-gray-400 text-sm">Projects</p>
                    </div>
                    <div>
                        <h3 className="text-white text-2xl font-semibold">2+ Years</h3>
                        <p className="text-gray-400 text-sm">Experience</p>
                    </div>
                    <div>
                        <h3 className="text-white text-2xl font-semibold">5+ Stacks</h3>
                        <p className="text-gray-400 text-sm">Tech Mastery</p>
                    </div>
                </div>

                <div className="flex gap-4 mt-4">
                    <a
                        href="#resume"
                        className="text-white px-6 py-3 rounded-md border border-gray-500"
                    >
                        View Resume
                    </a>
                    <a
                        href="#contact"
                        className="text-white px-6 py-3 rounded-md border border-gray-500"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            <div className="mt-10 lg:mt-0 lg:ml-20 w-64 h-64 md:w-80 md:h-80 bg-gray-800 rounded-xl">
                {/* Replace this box with your actual image on weekend */}
            </div>

        </section>
    );
};

export default Intro;
