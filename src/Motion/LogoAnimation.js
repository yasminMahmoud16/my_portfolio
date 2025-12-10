export const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

export const child = {
    hidden: { opacity: 0, x: 0, rotate: 0 },
    visible: {
        opacity: 1,
        x: [0, 3, -3, 0],
        rotate: [0, 3, -3, 0],
        transition: {
            duration: 1.8,
            // repeat: Infinity,
            ease: "easeInOut",
        },
    },
};