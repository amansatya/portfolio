import React from "react";
import TextType from '../components/ui/TextType';
import RotatingText from '../components/ui/RotatingText'
import { useRef } from 'react';



const Intro = () => {
    return (
        <section
            id="intro"
            className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20"
        >

            <div className="flex flex-col gap-4 max-w-xl">
                <h1 className="text-white text-4xl md:text-6xl font-bold">
                    <TextType
                        text={"SATYA AMAN"}
                        typingSpeed={75}
                        pauseDuration={4500}
                        showCursor={false}
                        cursorCharacter="|"
                    />
                </h1>

                <h2 className="text-xl md:text-2xl font-medium text-white flex flex-wrap items-center">
                    Shaping ideas into{" "}
                    <RotatingText
                        texts={['elegant', 'scalable', 'impactful']}
                        mainClassName="inline-flex mx-2 px-2 sm:px-2 md:px-3 bg-[#0F0F11] text-white border border-white/10 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom="last"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                    {" "}code.
                </h2>

                <p className="text-gray-300 leading-relaxed max-w-xl">
                    I am a Full Stack Developer specializing in MERN, Python, and modern
                    web technologies. I love building apps that are fast, intuitive,
                    and visually clean. Turning ideas into polished, production-ready
                    products is what I enjoy the most.
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
