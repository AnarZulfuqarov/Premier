import { useRef, useState, useEffect } from 'react';
import './tourBlog.scss';
import { FaArrowLeft, FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import Index from "../../../../components/UserComponents/BlogCard/index.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation';
import { useGetAllBlogsQuery } from "../../../../services/adminApi.jsx";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function TourBlog() {
    const { t } = useTranslation();
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.destroy();
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    const { data: getAllBlogs } = useGetAllBlogsQuery();
    const blogs = getAllBlogs?.data.slice(0, 8);

    return (
        <div className="tour-blog" data-aos="fade-up">
            <div className="container" data-aos="fade-in">
                <div className="head" data-aos="fade-right" style={{marginBottom:"25px"}}>
                    <div className="title">
                        <h2>{t("home.tourBlog.title", "Səyahət Bloqu")}</h2>
                        <p>
                            {t(
                                "home.tourBlog.subtitle",
                                "Dünyanı kəşf etməyə hazırsınız? Səyahət hekayələri, faydalı məsləhətlər və unudulmaz məkanlar haqqında yazılar burada!"
                            )}
                        </p>
                    </div>
                    <button className={"d-none d-md-block"} onClick={() => navigate("/blog")} data-aos="fade-up">
                        {t("home.tourBlog.button", "Hamısına bax")} <FaArrowRightLong />
                    </button>
                </div>

                <div className="row slider-row" data-aos="zoom-in">
                    <Swiper
                        onSwiper={setSwiperInstance}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1440: { slidesPerView: 4 },
                        }}
                        spaceBetween={30}
                        grabCursor={true}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    >
                        {blogs && blogs.map((blog, index) => (
                            <SwiperSlide key={index}>
                                <Index index={index} blog={blog} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Custom Pagination Bullets */}
                    {blogs && blogs.length > 0 && (
                        <div className="custom-pagination" data-aos="fade-up">
                            {blogs.map((_, index) => (
                                <span
                                    key={index}
                                    className={`custom-bullet ${activeIndex === index ? "active" : ""}`}
                                    onClick={() => swiperInstance && swiperInstance.slideTo(index)}
                                ></span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="col-12 text-end paginate d-none d-lg-block" style={{ marginTop: "40px" }} data-aos="fade-up">
                    <button ref={prevRef} className="white">
                        <FaArrowLeft />
                    </button>
                    <button ref={nextRef} className="blue">
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TourBlog;
