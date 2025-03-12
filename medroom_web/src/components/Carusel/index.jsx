import React from "react";
import Blog from "../Blog";
import styles from "./style.module.css";
import { settings } from "./data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BlogCarousel = ({ blogs }) => {
  return (
    <div className={styles.blogs}>
      <Carousel {...settings}>
        {blogs.map((blog) => (
          <Blog data={blog}/>
        ))}
      </Carousel>
    </div>
  );
};

export default BlogCarousel;
