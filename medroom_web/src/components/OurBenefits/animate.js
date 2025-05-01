export const textVariant = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 40,
        ease: "anticipate",
        duration: 1,
      },
    },
  };

  export const titleVariant = {
    hidden: { opacity: 0, y: -200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 40,
        ease: "anticipate",
        duration: 1,
      },
    },
  };

  export const buttonVariant = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 40,
        ease: "anticipate",
        duration: 1,
      },
    },
  };

  export const imageVariant = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 40,
        ease: "anticipate",
        duration: 1,
      },
    },
  };


  export const containerVariant = {
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

