// import React from "react";
import Blog from "../Blog";
import styles from "./style.module.css";
// import { settings } from "./data";
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
import { Navigation, Autoplay, Pagination } from "swiper/modules"; // ✅ Ավելացնում ենք Pagination
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // ✅ Պարտադիր է Dots-երի համար
import './swiper.css'

const BlogCarousel = ({blogs}) => {
  return (
    <div className={styles.blogs}>
            <Swiper
                className="custom-swiper"
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={10}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 2000 }}
                navigation
                pagination={{ clickable: true, el: ".custom-pagination" }}
                breakpoints={{
                  1440: {
                      slidesPerView: 4,
                  },
                  1024: {
                      slidesPerView: 3, 
                  },
                  650: {
                      slidesPerView: 2,
                  },
                  0: {
                      slidesPerView: 1, 
                  },
              }}
              speed={800} 
            >
                
              {blogs.map((blog, i) => (
                <SwiperSlide key={i} style={{height: 500,}}>
                  <Blog data={blog}/>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-pagination" />
        </div>
  );
};

export default BlogCarousel;