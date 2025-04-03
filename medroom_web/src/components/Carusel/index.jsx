// import React from "react";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const BlogCarousel = ({ blogs }) => {
//   return (
//     <div className={styles.blogs}>
//       <Carousel {...settings}>
//         {blogs.map((blog) => (
//           <Blog data={blog}/>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default BlogCarousel;


import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Blog from "../Blog";
import { settings } from "./data";
import styles from "./style.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import './swiper.css'

const BlogCarousel = ({blogs}) => {
  return (
    <div className={styles.blogs}>
            <Swiper className="custom-swiper" {...settings} >
              {blogs.map((blog, i) => (
                <SwiperSlide key={i} style={{height: 550}}>
                  <Blog data={blog}/>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-pagination" />
        </div>
  );
};

export default BlogCarousel;