// Container Animation
export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

// Item Animation (Wave Down)
export const itemVariants = {
    hidden: (i) => ({
        opacity: 0,
        y: -80,     
    }),
    visible: (i) => ({
        opacity: 1,
        y: 0,

        transition: {
            type: "spring",
            stiffness: 120,
            damping: 15,
            delay: i * 0.1,

            x: {
                duration: 0.6,
                repeat: 1,
                repeatType: "mirror",
                ease: "easeOut",
                values: [0, -10, 10, -5, 5, 0],
            },
        },
    }),

    hover: {
        scale: 1.08,
    },
};
