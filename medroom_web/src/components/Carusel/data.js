import { Navigation, Autoplay, Pagination } from "swiper/modules";

export const settings = {
    modules:[Navigation, Autoplay, Pagination],
    spaceBetween: 10,
    slidesPerView: 3,
    loop: true,
    autoplay: { delay: 2000 },
    navigation: true,
    pagination: { clickable: true, el: ".custom-pagination" },
    breakpoints: {
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
    },
    speed: 800
}
   