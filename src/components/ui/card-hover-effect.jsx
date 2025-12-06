import { cn } from "../../utils/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6",
                className
            )}
        >
            {items.map((item, idx) => (
                <a
                    href={item?.link}
                    key={idx}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full
                bg-[#1B2A41]/70   /* smooth navy glow */
                dark:bg-[#1B2A41]/70
                block rounded-3xl shadow-lg shadow-[#1B2A41]/40"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>

                    <Card>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </a>
            ))}
        </div>
    );
};

export const Card = ({ className, children }) => {
    return (
        <div
            className={cn(
                "rounded-xl h-full w-full p-3 overflow-hidden bg-[#0D1115] border border-[#1F2A3C]/40 group-hover:border-[#4361ee]/60 transition-all duration-300 relative z-20 shadow-md shadow-black/20",  className)}
        >
            <div className="relative z-50">
                <div className="p-3">{children}</div>
            </div>
        </div>
    );
};

export const CardTitle = ({ className, children }) => {
    return (
        <h4
            className={cn(
                "text-cyan-300 font-semibold tracking-wide text-xl",
                className
            )}
        >
            {children}
        </h4>
    );
};

export const CardDescription = ({ className, children }) => {
    return (
        <p
            className={cn(
                "mt-3 text-white tracking-wide leading-relaxed text-base",
                className
            )}
        >
            {children}
        </p>
    );
};
