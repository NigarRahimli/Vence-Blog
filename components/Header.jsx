"use client";
import React, { useState, useEffect, use } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Poppins } from "next/font/google";
import "./style.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  
  useEffect(() => {
    const element = document.getElementById("down");
    if (isDropdownVisible) {
      element.style.transform = "rotate(180deg)";
    } else {
      element.style.transform = "rotate(0deg)";
    }
  }, [isDropdownVisible]);
    const handleMouseEnter = () => {
      setDropdownVisible(true);
       // Fix the 'rotate' function call.
    };
  
    const handleMouseLeave = () => {
      setDropdownVisible(false);
    };


  return (
    <>
      <nav className="flex items-center justify-between flex-wrap text-[#F8F9FA]  px-[100px] pt-[36px]  fixed w-full z-10">
        <h1 className="text-[#F8F9FA] text-[18px] font-bold">VENCE.</h1>
        <div className="pages flex items-center justify-between align-middle gap-x-[25px]">
          <h1>Home</h1>
          <div className="flex items-center justify-between align-middle gap-x-[5px]">
            <div
              className="insp flex items-center gap-x-[5px] relative transition-all ease-in-out delay-150 hover:-translate-y-1  hover: duration-200  "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <h1> Inspiration</h1>
              <svg id="down" className="w-[8px] transition-all ease-in-out "
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
              >
                <path
                  d="M3.6891 4.72616L0.128783 1.16583C-0.0429278 0.994114 -0.0429278 0.715726 0.128783 0.544034L0.544038 0.128779C0.715456 -0.0426389 0.993275 -0.0429688 1.1651 0.128046L4.00001 2.94968L6.8349 0.128046C7.00672 -0.0429688 7.28454 -0.0426389 7.45596 0.128779L7.87122 0.544034C8.04293 0.715745 8.04293 0.994132 7.87122 1.16583L4.31091 4.72616C4.1392 4.89786 3.86082 4.89786 3.6891 4.72616Z"
                  fill="#F8F9FA"
                  fill-opacity="0.5"
                />
              </svg>
        
            {isDropdownVisible && (
              <div className="dropdown-menu absolute top-[25px] bg-slate-950/[.3] text-center py-[5px] left-[30px] w-[90px] transition-all ">
                <ul>
                  <li>Menu 1</li>
                  <li>Menu 2</li>
                  <li>Menu 3</li>
                </ul>
              </div>
            )}
          </div>
          </div>
          <div className="flex items-center justify-between align-middle gap-x-[5px] ">
            <h1>Courses</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
            >
              <path
                d="M3.6891 4.72616L0.128783 1.16583C-0.0429278 0.994114 -0.0429278 0.715726 0.128783 0.544034L0.544038 0.128779C0.715456 -0.0426389 0.993275 -0.0429688 1.1651 0.128046L4.00001 2.94968L6.8349 0.128046C7.00672 -0.0429688 7.28454 -0.0426389 7.45596 0.128779L7.87122 0.544034C8.04293 0.715745 8.04293 0.994132 7.87122 1.16583L4.31091 4.72616C4.1392 4.89786 3.86082 4.89786 3.6891 4.72616Z"
                fill="#F8F9FA"
                fill-opacity="0.5"
              />
            </svg>
          </div>
          <h1>Blog</h1>
          <div className="w-1 h-25 bg-gray-400 bg-opacity-50"></div>

          <div className="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M11.8368 10.3765L9.49991 8.03965C9.39444 7.93417 9.25146 7.87558 9.10145 7.87558H8.71939C9.36631 7.04817 9.75071 6.00747 9.75071 4.87536C9.75071 2.18219 7.56852 0 4.87536 0C2.18219 0 0 2.18219 0 4.87536C0 7.56852 2.18219 9.75071 4.87536 9.75071C6.00747 9.75071 7.04817 9.36631 7.87558 8.71939V9.10145C7.87558 9.25146 7.93417 9.39444 8.03965 9.49991L10.3765 11.8368C10.5969 12.0571 10.9531 12.0571 11.1711 11.8368L11.8345 11.1735C12.0548 10.9531 12.0548 10.5969 11.8368 10.3765ZM4.87536 7.87558C3.2182 7.87558 1.87514 6.53485 1.87514 4.87536C1.87514 3.2182 3.21586 1.87514 4.87536 1.87514C6.53251 1.87514 7.87558 3.21586 7.87558 4.87536C7.87558 6.53251 6.53485 7.87558 4.87536 7.87558Z"
                fill="#F8F9FA"
                fill-opacity="0.5"
              />
            </svg>
          </div>
        </div>
      </nav>
      <div className="slider relative z-[-1]">
        <Swiper
          loop={true}
          pagination={{
            type: "fraction",
            // el: ".custom-pagination",
          }}
          navigation={false}
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="mySwiper h-[600px] "
        >
          <SwiperSlide>
            <img
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1618588507085-c79565432917?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fHww"
              alt=""
            />
            <div className="slider-text flex absolute left-0 top-[100px] z-11 flex-col gap-y-[15px] pl-[100px] pt-[269px] ">
              <h3 className="text-[#E5E5E5] text-[12px] font-light leading-[20px]">
                29.Jun.2022
              </h3>
              <h1 className="text-[#F8F9FA] text-[25px] font-bold w-[605px]">
                I Like to Keep Things Simple to Appreciate the Details
              </h1>
              <h3 className="text-[#E5E5E5] text-[12px] font-light w-[499px] leading-[20px]">
                Many years ago, I worked for my parents who own a video <br />
                production company.
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full"
              src="https://swiperjs.com/demos/images/nature-1.jpg"
            />
            <div className="slider-text flex absolute left-0 top-[100px] z-11 flex-col gap-y-[15px] pl-[100px] pt-[269px] ">
              <h3 className="text-[#E5E5E5] text-[12px] font-light leading-[20px]">
                29.Jun.2022
              </h3>
              <h1 className="text-[#F8F9FA] text-[25px] font-bold w-[605px]">
                I Like to Keep Things Simple to Appreciate the Details
              </h1>
              <h3 className="text-[#E5E5E5] text-[12px] font-light w-[499px] leading-[20px]">
                Many years ago, I worked for my parents who own a video <br />
                production company.
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            />
            <div className="slider-text flex absolute left-0 top-[100px] z-11 flex-col gap-y-[15px] pl-[100px] pt-[269px] ">
              <h3 className="text-[#E5E5E5] text-[12px] font-light leading-[20px]">
                29.Jun.2022
              </h3>
              <h1 className="text-[#F8F9FA] text-[25px] font-bold w-[605px]">
                I Like to Keep Things Simple to Appreciate the Details
              </h1>
              <h3 className="text-[#E5E5E5] text-[12px] font-light w-[499px] leading-[20px]">
                Many years ago, I worked for my parents who own a video <br />
                production company.
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full"
              src="https://swiperjs.com/demos/images/nature-3.jpg"
            />
            <div className="slider-text flex absolute left-0 top-[100px] z-11 flex-col gap-y-[15px] pl-[100px] pt-[269px] ">
              <h3 className="text-[#E5E5E5] text-[12px] font-light leading-[20px]">
                29.Jun.2022
              </h3>
              <h1 className="text-[#F8F9FA] text-[25px] font-bold w-[605px]">
                I Like to Keep Things Simple to Appreciate the Details
              </h1>
              <h3 className="text-[#E5E5E5] text-[12px] font-light w-[499px] leading-[20px]">
                Many years ago, I worked for my parents who own a video <br />
                production company.
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full"
              src="https://swiperjs.com/demos/images/nature-4.jpg"
            />
            <div className="slider-text flex absolute left-0 top-[100px] z-11 flex-col gap-y-[15px] pl-[100px] pt-[269px] ">
              <h3 className="text-[#E5E5E5] text-[12px] font-light leading-[20px]">
                29.Jun.2022
              </h3>
              <h1 className="text-[#F8F9FA] text-[25px] font-bold w-[605px]">
                I Like to Keep Things Simple to Appreciate the Details
              </h1>
              <h3 className="text-[#E5E5E5] text-[12px] font-light w-[499px] leading-[20px]">
                Many years ago, I worked for my parents who own a video <br />
                production company.
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Header;
