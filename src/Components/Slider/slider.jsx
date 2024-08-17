import { Swiper, SwiperSlide } from "swiper/react"
import { Grid} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import img1 from "../../assets/img_1.jpg"
import img2 from "../../assets/img_2.jpg"
import img3 from "../../assets/img_3.jpg"
import img4 from "../../assets/img_4.jpg"
import img5 from "../../assets/img_5.jpg"
import img6 from "../../assets/img_6.jpg"

import SectionWrapper from "../Section_wrapper/wrapper"
import "./slider.css"
function Slider() {
    return (
        <>
            <h2 className="slider_title">Фото клієнтів</h2>
            <Swiper
                slidesPerView={3}
                grid={{
                    rows: 2,
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
            </Swiper>
            
        </>
    )
}

export default SectionWrapper("slider_section","slider_container",Slider);
