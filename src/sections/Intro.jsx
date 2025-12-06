import React from "react";
import TextType from '../components/ui/TextType';
import RotatingText from '../components/ui/RotatingText';
import { HoverEffect } from "../components/ui/card-hover-effect";
import { Button } from "../components/ui/moving-border";
import TiltedCard from '../components/ui/TiltedCard';

export const counters = [
    {
        title: "10+ Projects",
        description: "Completed full-stack, MERN, Python, and ML apps.",
        link: "#",
    },
    {
        title: "2+ Years Experience",
        description: "Hands-on with web development, APIs, and UI engineering.",
        link: "#",
    },
    {
        title: "5+ Tech Stacks",
        description: "MERN, Python, FastAPI, Tailwind, React, ML tools.",
        link: "#",
    },
];

const Intro = () => {
    return (
        <section
            id="intro"
            className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-10 pb-16 gap-10 mt-16"
        >

            <div className="flex flex-col gap-6 max-w-2xl w-full ml-14">

                <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight w-full">
                    <TextType
                        text={"SATYA AMAN"}
                        typingSpeed={75}
                        pauseDuration={4500}
                        showCursor={false}
                    />
                </h1>

                <h2 className="text-3xl md:text-4xl font-semibold text-gray-200 flex items-center flex-wrap">
                    Shaping ideas into{" "}
                    <RotatingText
                        texts={['elegant', 'scalable', 'impactful']}
                        mainClassName="inline-flex mx-2 px-4 py-1.5 bg-[#111827] text-white border border-white/20 rounded-lg items-center"
                        staggerFrom="last"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.03}
                        splitLevelClassName="overflow-hidden pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                    {" "}code.
                </h2>

                <p className="text-gray-300 leading-relaxed text-xl md:text-2xl tracking-wide">
                    I am a Full Stack Developer specializing in MERN, Python, and modern
                    web technologies. I love building apps that are fast, intuitive,
                    and visually clean. Turning ideas into polished, production-ready
                    products is what I enjoy the most.
                </p>

                <div className="mt-2">
                    <HoverEffect items={counters} />
                </div>

                <div className="flex gap-4 mt-3">
                    <Button borderRadius="1.75rem">
                        <span className="cursor-pointer px-8 py-3 text-lg md:text-xl font-medium">
                            <a href="/public/SATYA AMAN RESUME.pdf" className="text-white" target="_blank">View Resume</a>
                        </span>
                    </Button>
                    <Button borderRadius="1.75rem">
                        <span className="cursor-pointer px-8 py-3 text-lg md:text-xl font-medium">
                            <a href="#contact" className="text-white">Contact Me</a>
                        </span>
                    </Button>
                </div>
            </div>

            <div className="w-[260px] md:w-[330px] lg:w-[380px] aspect-[828/1024] mr-16">
                <TiltedCard
                    imageSrc="/profile.jpg"
                    altText="SATYA AMAN"
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={false}
                />
            </div>

        </section>
    );
};

export default Intro;
