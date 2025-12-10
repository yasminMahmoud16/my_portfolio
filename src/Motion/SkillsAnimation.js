export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};



export const itemVariants = {
    hidden: { opacity: 0, y: -80 },
    visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 15,
            delay: custom * 0.12,
        },
    }),
};
