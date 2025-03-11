import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blog from "../Blog";
import styles from "./style.module.css";
import { settings } from "./data";

const BlogCarousel = ({ blogs }) => {
  return (
    <Slider className={styles.blogs} {...settings}>
      {blogs.map((blog) => (
        <Blog data={blog} />
      ))}
    </Slider>
  );
};

export default BlogCarousel;
