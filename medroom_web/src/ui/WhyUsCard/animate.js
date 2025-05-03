export const containerVariant = {
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
}

export const textVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25,
        ease: "anticipate",
        duration: 1,
      },
    },
  };
  
export const ImageVariant = {
    hidden: { opacity: 0, y: 200 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 25,
            ease: "anticipate",
            duration: 1,
        }
    }
}