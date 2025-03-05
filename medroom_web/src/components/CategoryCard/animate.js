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

export const buttonVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
  whileHover: {
    scale: 1.1,
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
  },
  whileTap: {
    scale: 0.95,
  },
};

export const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// export const hoverVariants = {
//   scale: 1.1,
//   rotate: 5,
//   boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
//   transition: { duration: 0.3 },
//   whileTap:{ scale: 0.9 }
// };
