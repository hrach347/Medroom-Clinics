export const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const textVariants = {
  hidden: { opacity: 0, x: 200 },
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
