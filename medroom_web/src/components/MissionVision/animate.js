export const containerVariant = {
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

export const cardVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 45,
            ease: "ease",
            duration: 1,
        }
    }
}

export const titleVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 6,
            ease: "anticipate",
            duration: 1,
        }
    }
}