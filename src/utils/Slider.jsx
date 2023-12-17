// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination ,Navigation,Autoplay} from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={3}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          400: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 5,
          },
          700: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <li className="relative pb-12">
            <img
              src="https://i.pinimg.com/564x/84/e0/c9/84e0c958114d35d5346c97813a6a20b1.jpg"
              alt=""
              className="w-28 h-28 md:w-32 md:h-32 mx-2 rounded-full"
            />
            <p className="flex items-center justify-center rounded-full w-28 h-28 md:w-32 md:h-32 absolute top-0 uppercase left-2 bottom-4 font-bold text-white hover:bg-white/20 hover:text-black bg-black/40  z-20">
              <span className="text-[.8rem]">Thailand</span>
            </p>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="relative">
            <img
              src="https://i.pinimg.com/564x/84/e0/c9/84e0c958114d35d5346c97813a6a20b1.jpg"
              alt=""
              className="w-28 h-28 md:w-32 md:h-32 mx-2 rounded-full"
            />
            <p className="flex items-center justify-center rounded-full w-28 h-28 md:w-32 md:h-32 absolute top-0 uppercase left-2 bottom-4 font-bold text-white hover:bg-white/20 hover:text-black bg-black/40  z-20">
              <span className="text-[.8rem]">Thailand</span>
            </p>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="relative">
            <img
              src="https://i.pinimg.com/564x/84/e0/c9/84e0c958114d35d5346c97813a6a20b1.jpg"
              alt=""
              className="w-28 h-28 md:w-32 md:h-32 mx-2 rounded-full"
            />
            <p className="flex items-center justify-center rounded-full w-28 h-28 md:w-32 md:h-32 absolute top-0 uppercase left-2 bottom-4 font-bold text-white hover:bg-white/20 hover:text-black bg-black/40  z-20">
              <span className="text-[.8rem]">Thailand</span>
            </p>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="relative">
            <img
              src="https://i.pinimg.com/564x/84/e0/c9/84e0c958114d35d5346c97813a6a20b1.jpg"
              alt=""
              className="w-28 h-28 md:w-32 md:h-32 mx-2 rounded-full"
            />
            <p className="flex items-center justify-center rounded-full w-28 h-28 md:w-32 md:h-32 absolute top-0 uppercase left-2 bottom-4 font-bold text-white hover:bg-white/20 hover:text-black bg-black/40  z-20">
              <span className="text-[.8rem]">Thailand</span>
            </p>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="relative">
            <img
              src="https://i.pinimg.com/564x/84/e0/c9/84e0c958114d35d5346c97813a6a20b1.jpg"
              alt=""
              className="w-28 h-28 md:w-32 md:h-32 mx-2 rounded-full"
            />
            <p className="flex items-center justify-center rounded-full w-28 h-28 md:w-32 md:h-32 absolute top-0 uppercase left-2 bottom-4 font-bold text-white hover:bg-white/20 hover:text-black bg-black/40  z-20">
              <span className="text-[.8rem]">Thailand</span>
            </p>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="relative">
            <img
              src="https://i.pinimg.com/564x/84/e0/c9/84e0c958114d35d5346c97813a6a20b1.jpg"
              alt=""
              className="w-28 h-28 md:w-32 md:h-32 mx-2 rounded-full"
            />
            <p className="flex items-center justify-center rounded-full w-28 h-28 md:w-32 md:h-32 absolute top-0 uppercase left-2 bottom-4 font-bold text-white hover:bg-white/20 hover:text-black bg-black/40  z-20">
              <span className="text-[.8rem]">Thailand</span>
            </p>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="relative">
            <img
              src="https://i.pinimg.com/564x/84/e0/c9/84e0c958114d35d5346c97813a6a20b1.jpg"
              alt=""
              className="w-28 h-28 md:w-32 md:h-32 mx-2 rounded-full"
            />
            <p className="flex items-center justify-center rounded-full w-28 h-28 md:w-32 md:h-32 absolute top-0 uppercase left-2 bottom-4 font-bold text-white hover:bg-white/20 hover:text-black bg-black/40  z-20">
              <span className="text-[.8rem]">Thailand</span>
            </p>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="relative">
            <img
              src="https://i.pinimg.com/564x/84/e0/c9/84e0c958114d35d5346c97813a6a20b1.jpg"
              alt=""
              className="w-28 h-28 md:w-32 md:h-32 mx-2 rounded-full"
            />
            <p className="flex items-center justify-center rounded-full w-28 h-28 md:w-32 md:h-32 absolute top-0 uppercase left-2 bottom-4 font-bold text-white hover:bg-white/20 hover:text-black bg-black/40  z-20">
              <span className="text-[.8rem]">Thailand</span>
            </p>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="relative">
            <img
              src="https://i.pinimg.com/564x/84/e0/c9/84e0c958114d35d5346c97813a6a20b1.jpg"
              alt=""
              className="w-28 h-28 md:w-32 md:h-32 mx-2 rounded-full"
            />
            <p className="flex items-center justify-center rounded-full w-28 h-28 md:w-32 md:h-32 absolute top-0 uppercase left-2 bottom-4 font-bold text-white hover:bg-white/20 hover:text-black bg-black/40  z-20">
              <span className="text-[.8rem]">Thailand</span>
            </p>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="relative">
            <img
              src="https://i.pinimg.com/564x/84/e0/c9/84e0c958114d35d5346c97813a6a20b1.jpg"
              alt=""
              className="w-28 h-28 md:w-32 md:h-32 mx-2 rounded-full"
            />
            <p className="flex items-center justify-center rounded-full w-28 h-28 md:w-32 md:h-32 absolute top-0 uppercase left-2 bottom-4 font-bold text-white hover:bg-white/20 hover:text-black bg-black/40  z-20">
              <span className="text-[.8rem]">Thailand</span>
            </p>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="relative">
            <img
              src="https://i.pinimg.com/564x/84/e0/c9/84e0c958114d35d5346c97813a6a20b1.jpg"
              alt=""
              className="w-28 h-28 md:w-32 md:h-32 mx-2 rounded-full"
            />
            <p className="flex items-center justify-center rounded-full w-28 h-28 md:w-32 md:h-32 absolute top-0 uppercase left-2 bottom-4 font-bold text-white hover:bg-white/20 hover:text-black bg-black/40  z-20">
              <span className="text-[.8rem]">Thailand</span>
            </p>
          </li>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
