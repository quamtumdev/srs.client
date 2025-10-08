import { Link } from "react-router-dom";
import { IoArrowRedoSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../../custom.css";

export const Teams = () => {

  return (
    <>
      <section className="blogs-section-five">
        <div className="container">
          <div className="header-five-title section-title home-three-head section-title-center section-header-titler">
            <h2>A Dedicated Group of IITians and Doctors</h2>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              600: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
            }}
            className="home-five-blog"
          >
            <SwiperSlide>
              <div className="blog-five-item">
                <div className="product-img-five">
                  <Link to="#">
                    <img
                      className="img-fluid TeamsImg"
                      alt="Img"
                      src="assets/img/teams/1.jpeg"
                    />
                  </Link>
                </div>
                <div className="blog-box-content">
                  <div className="blog-five-header d-flex align-items-center justify-content-between">
                    <div className="blog-five-text">
                      <p>
                        <IoArrowRedoSharp className="text-orange" />
                        &nbsp;&nbsp;Physics Faculty
                      </p>
                    </div>
                  </div>
                  <div className="blog-five-footer">
                    <h6>
                      <Link to="#">Ajay Pratap (B.Tech-IITBHU)</Link>
                    </h6>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="blog-five-item">
                <div className="product-img-five">
                  <Link to="#">
                    <img
                      className="img-fluid TeamsImg"
                      alt="Img"
                      src="assets/img/teams/2.jpeg"
                    />
                  </Link>
                </div>
                <div className="blog-box-content">
                  <div className="blog-five-header d-flex align-items-center justify-content-between">
                    <div className="blog-five-text">
                      <p>
                        <IoArrowRedoSharp className="text-orange" />
                        &nbsp;&nbsp;Chemistry Faculty
                      </p>
                    </div>
                  </div>
                  <div className="blog-five-footer">
                    <h6>
                      <Link to="#">APS Tomar (M.Sc, IIT-JAM)</Link>
                    </h6>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="blog-five-item">
                <div className="product-img-five">
                  <Link to="#">
                    <img
                      className="img-fluid TeamsImg"
                      alt="Img"
                      src="assets/img/teams/3.jpeg"
                    />
                  </Link>
                </div>
                <div className="blog-box-content">
                  <div className="blog-five-header d-flex align-items-center justify-content-between">
                    <div className="blog-five-text">
                      <p>
                        <IoArrowRedoSharp className="text-orange" />
                        &nbsp;&nbsp;Maths Faculty
                      </p>
                    </div>
                  </div>
                  <div className="blog-five-footer">
                    <h6>
                      <Link to="#">Himanshu Gupta (B.Tech - HBTU, Kanpur)</Link>
                    </h6>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="blog-five-item">
                <div className="product-img-five">
                  <Link to="#">
                    <img
                      className="img-fluid TeamsImg"
                      alt="Img"
                      src="assets/img/teams/4.jpeg"
                    />
                  </Link>
                </div>
                <div className="blog-box-content">
                  <div className="blog-five-header d-flex align-items-center justify-content-between">
                    <div className="blog-five-text">
                      <p>
                        <IoArrowRedoSharp className="text-orange" />
                        &nbsp;&nbsp;Maths Faculty
                      </p>
                    </div>
                  </div>
                  <div className="blog-five-footer">
                    <h6>
                      <Link to="#">Akash Yadav (B.Tech, REC, Kannauj)</Link>
                    </h6>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};
