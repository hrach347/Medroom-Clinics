import styles from "./style.module.css";


export const settings = {
  draggable: false,
  infinite: true,
  autoPlay: true,
  showDots: false,
  arrows: false,
  containerClass: styles.slider,
  itemClass: styles.item,
  autoPlaySpeed: 20,
  customTransition: "all 2000ms linear",
  transitionDuration: 2000,
  responsive: {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 650 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  },
};
