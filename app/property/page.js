'use client'
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from 'react';
import VideoPopup from '@/components/elements/VideoPopup'
import CounterUp from "@/components/elements/CounterUp"
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from "next/link"
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".dot-2",
        clickable: true,
    },
    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
};

export default function Property() {
    const [mainImage, setMainImage] = useState("/assets/img/header/home-1.jpg"); // Initial main image
    const [activeItem, setActiveItem] = useState(1)

    const handleClick = (index) => {
        setActiveItem(index)
    }
    // Update mainImage based on Swiper slide change
    const handleSlideChange = (swiper) => {
        const activeSlideIndex = swiper.realIndex;
        const slides = swiper.slides;
        if (slides.length > 0 && slides[activeSlideIndex]) {
            const imageSrc = slides[activeSlideIndex].querySelector('img').getAttribute('src');
            setMainImage(imageSrc);
        }
    };
    return (
        <>
            <Layout headerStyle={1} footerStyle={2}>
                <section className="Project-details-section fix section-padding-property">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="details-content pt-2 pb-4">
                                        <h3>504 Victor Street Saddle Brook, New Jersey, 07663 United States</h3>
                                    </div>
                                    <div className="project-details-items">
                                        <div className="details-image">
                                            <img src={mainImage} alt="img" /> {/* Display the main image here */}
                                        </div>
                                    </div>
                                    <section className="service-section-3 fix pt-2">
                                        <div className="container" style={{paddingLeft:0,paddingRight:0}}>
                                            <div className="swiper service-slider-2">
                                                <Swiper
                                                   {...swiperOptions}
                                                   onSlideChange={(swiper) => handleSlideChange(swiper)}
                                                    className="swiper-container" // Set the class for swiper container
                                                >
                                                    <SwiperSlide>
                                                        <div className="service-card-items mt-0">
                                                            <div className="service-image">
                                                                <img src="/assets/img/housesample/1.png" alt="service-img" />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="service-card-items mt-0">
                                                            <div className="service-image">
                                                                <img src="/assets/img/housesample/2.png" alt="property" />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="service-card-items mt-0">
                                                            <div className="service-image">
                                                                <img src="/assets/img/housesample/3.png" alt="property" />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="service-card-items mt-0">
                                                            <div className="service-image">
                                                                <img src="/assets/img/housesample/4.png" alt="property" />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="service-card-items mt-0">
                                                            <div className="service-image">
                                                                <img src="/assets/img/housesample/5.png" alt="property" />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                </Swiper>
                                                {/* <div className="swiper-dot-2">
                                                    <div className="dot-2" />
                                                </div> */}
                                            </div>
                                        </div>
                                    </section>
                                    <div className="row">
                                <div className="col-lg-6">




                                {/* <div style={{paddingTop:"20px"}}> <Link href="/service" className="" style={{width:"60%"}}>
                                <Button variant="contained" className='buttonhero41' endIcon={<ArrowOutwardIcon />}>
        Find my home
      </Button></Link>
                                <Button variant="outlined" endIcon={<ArrowOutwardIcon />}  className='buttonhero42'>
                                Find Roommates
      </Button>
      </div>
                                <Button variant="outlined" endIcon={<ArrowOutwardIcon />}  className='buttonhero42'>
                                        
                                        <Link href="/service" className="">check now</Link>
      </Button>
                                   
                                </div>
                                <div className="col-lg-6"><div className="container section-padding-property">
                <div className="about-button wow fadeInUp" data-wow-delay=".5s">
                                                    <Link href="/service" className="details-btn">
                                                        Apply
                                                        <i className="fa-solid fa-arrow-right-long" />
                                                    </Link>
                                                </div>
                                                </div></div></div> */}
                                    
                                    <div style={{paddingTop:"20px",justifyContent:"right",display:"flex"}}>
                                    <Link href="/tour-details" className="" style={{width:"60%"}}>
                                <Button variant="contained" className='buttonhero41' endIcon={<ArrowOutwardIcon />} style={{width:"84%"}}>Tour</Button></Link>
                                    
                                    
          </div>
                                   
                                       
                                    </div>
                                    <div className="col-lg-6"> 
                                        <div style={{paddingTop:"20px"}}>
                                    <Link href="/tour-details" className="" style={{width:"60%"}}>
                                        <Button variant="outlined" endIcon={<ArrowOutwardIcon />}  className='buttonhero42' style={{border:'1px solid #044865',color:"#044895",width:"60%"}}>
                                    Apply
          </Button></Link></div></div></div>
                                        
                                           



                                    
                                </div>
                                <div className="col-lg-3">
                                    {/* <div className="details-content pt-1">
                                        <h3>Rent</h3> $2300/month 
                                    </div> */}
                                     <section className="about-section fix bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg-2.jpg")', padding:'60px 0'}}>
                       
                            <div className="about-wrapper style-2">
                            
                                    <div className="col-lg-6">
                                        <div className="about-image-items">
                                            <div className="counter-shape float-bob-y">
                                                <div className="icon">
                                                    <img src="/assets/img/about/icon-1.svg" alt="icon-img" />
                                                </div>
                                                <div className="content">
                                                    <h3>$<CounterUp count={2300} />/month</h3>
                                                
                                                </div>
                                            </div>
                                        </div>
                                  
                                  
                              
                            </div>
                        </div>
                    </section>
                                 
                                    <div className="main-sidebar">
                                        <div className="single-sidebar-widget">
                                            <div className="wid-title">
                                                <h3>Benefits</h3>
                                            </div>
                                            <div className="opening-category">
                                                <ul>
                                                    <li className="icon-border" style={{padding:'9px 25px 15px 25px'}}><img src="/assets/img/housesample/Icons/Vectorbed.svg" alt="Bed Icon" style={{ maxWidth: '15%', height: 'auto' }}/>3 Bed Room</li>
                                                    <li className="icon-border"><img src="/assets/img/housesample/Icons/bath.svg" alt="Bath Icon" style={{ maxWidth: '15%', height: 'auto' }}/>2 Bath Room</li>
                                                    <li className="icon-border"><img src="/assets/img/housesample/Icons/area.svg" alt="Area Icon" style={{ maxWidth: '15%', height: 'auto' }}/>970-1200 Sqft</li>
                                                    <li className="icon-border"><img src="/assets/img/housesample/Icons/washing-machine.svg" alt="washing Icon" style={{ maxWidth: '15%', height: 'auto' }}/>Laundry on Site</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                            
                                    {/* Optional sidebar content */}
                                </div>
                                <div className="col-lg-3">
                                   
                                    <div className="main-sidebar">
                                        
                                    <div className="single-sidebar-widget">
                                            <div className="wid-title">
                                                <h3>Facilities</h3>
                                            </div>
                                            <div className="news-widget-categories">
                                                <div className="tagcloud">
                                                    <Link href="#" style={{borderRadius:'20px'}}>Electricity</Link>
                                                    <Link href="#" style={{borderRadius:'20px'}}>Gas</Link>
                                                    <Link href="#" style={{borderRadius:'20px'}}>Gardener</Link>
                                                    <Link href="#" style={{borderRadius:'20px'}}>Heater</Link>
                                                    <Link href="#" style={{borderRadius:'20px'}}>Trash</Link>
                                                    <Link href="#" >Water</Link>
                                                    <Link href="#">Snow Removal</Link>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                    {/* Optional sidebar content */}
                                    <div>
                                    <section className="team-section-2 bg-cover" style={{ backgroundImage: 'url("assets/img/team/bg.jpg")' }}>
                <div className="container">
                
                    <div className="row">
                        <div className="wow fadeInUp" data-wow-delay=".3s">
                            <div className="">
                                <div className="team-image">
                                <div className=" style-2">
                            <div style={{height:'200px'}}>
                            <div className="map-section">
                        <div className="map1-items">
                            <div className="googpemap">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen loading="lazy" />
                            </div>
                        </div>
                    </div>
                  </div>
                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <p><i className="fa-solid fa-male"/> Walking:13minutes</p>
                                    <p><i className="fa-solid fa-train"/> Transit:15minutes</p>
                                    <p><i className="fa-solid fa-flag"/> Distance:0.5miles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                    <section className="project-section fix">
                        <div className="container">
                            <div className="project-wrapper ms-0">
                            <div className="swiper project-slider-2">
                
                  
                        
                    
                    
            </div>
                            </div>
                        </div>
                    </section>

                </div>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-12">
                            <section className="service-details-section fix">
                    <div className="container">
                        <div className="service-details-wrapper">
                            <div className="row g-4">
                                <div className="col-12 col-lg-12 order-1 order-md-2">
                                    <div className="service-details-items team-details-wrapper">
                                        
                                        <div className="team-single-history pt-5">
                                <div className="title">
                                    <h3>Described about the home</h3>
                                </div>
                                <h5 className="pt-5">Home <span>highlights</span></h5>
                                <p className="mt-3">
                                    Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the is quis nostrud vitae exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit The is ipsum dolor sit amet consectetur nulla adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat..
                                </p>
                            </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
