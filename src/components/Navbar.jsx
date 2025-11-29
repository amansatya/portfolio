"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
            <p className="text-black dark:text-white">
                The Navbar will show on top of the page
            </p>
        </div>
    );
}

export default function Navbar({ className }) {
    const [active, setActive] = useState(null);

    return (
        <div
            className={cn(
                "fixed top-4 inset-x-0 max-w-3xl mx-auto z-[100] backdrop-blur-xl bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-full shadow-lg",
                className
            )}
        >
            <Menu setActive={setActive}>
                {/* Home */}
                <MenuItem active={active} setActive={setActive} item="Home">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#home">Go to Home</HoveredLink>
                    </div>
                </MenuItem>

                {/* About */}
                <MenuItem active={active} setActive={setActive} item="About">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#about">Who I Am</HoveredLink>
                        <HoveredLink href="#about">My Journey</HoveredLink>
                    </div>
                </MenuItem>

                {/* TechStack */}
                <MenuItem active={active} setActive={setActive} item="TechStack">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#techstack">Frontend</HoveredLink>
                        <HoveredLink href="#techstack">Backend</HoveredLink>
                        <HoveredLink href="#techstack">Dev Tools</HoveredLink>
                    </div>
                </MenuItem>

                {/* Experience */}
                <MenuItem active={active} setActive={setActive} item="Experience">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#experience">Work Timeline</HoveredLink>
                        <HoveredLink href="#experience">Roles</HoveredLink>
                        <HoveredLink href="#experience">Achievements</HoveredLink>
                    </div>
                </MenuItem>

                {/* Projects */}
                <MenuItem active={active} setActive={setActive} item="Projects">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">

                        <ProductItem
                            title="Weather App"
                            href="#projects"
                            src="/weather-app.png"
                            description="7-day forecast, smooth UI, Tailwind animations."
                        />

                        <ProductItem
                            title="Movie Recommendation App"
                            href="#projects"
                            src="/movie-app.png"
                            description="Mood-based suggestions using TMDB API."
                        />

                        <ProductItem
                            title="Budget Tracker"
                            href="#projects"
                            src="/budget-app.png"
                            description="Multi-user finance tracking with charts."
                        />

                        <ProductItem
                            title="GIF Generator"
                            href="#projects"
                            src="/gif-app.png"
                            description="Upload images → generate GIF using Python."
                        />

                    </div>
                </MenuItem>

                {/* Contact */}
                <MenuItem active={active} setActive={setActive} item="Contact">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#contact">Email Me</HoveredLink>
                        <HoveredLink href="#contact">Let's Connect</HoveredLink>
                    </div>
                </MenuItem>

                {/* Socials */}
                <MenuItem active={active} setActive={setActive} item="Socials">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="https://github.com" target="_blank">
                            GitHub
                        </HoveredLink>
                        <HoveredLink href="https://linkedin.com" target="_blank">
                            LinkedIn
                        </HoveredLink>
                        <HoveredLink href="https://twitter.com" target="_blank">
                            Twitter / X
                        </HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}