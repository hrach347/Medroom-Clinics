export const titleVariant = {
    hidden: { opacity: 0, y: -100 }, 
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: 1, 
            ease: "easeOut", 
        }
  }
};

export const lineVariant = {
    hidden: { opacity: 0, x: 200 }, 
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
            duration: 1, 
            ease: "easeOut", 
        }
  }
};

export const textVariant = {
    hidden: { opacity: 0, x: 100 }, 
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
            duration: 0.7, 
            ease: "easeInOut", 
        }
  }
};

export const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };
  