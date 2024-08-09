import React, { useEffect, useState } from 'react';
import { SpacemanCanvas } from ".";
import Position from "./Position";

const mobileTextSize = "text-[60px]";
const pcTextSize = "lg:text-[50px] 2xl:text-[90px]";
const Hero = ({ scrollContainer }) => {
  const [yearsSinceInception, setYearsSinceInception] = useState('');

  useEffect(() => {
    const begin = new Date("2015/09/15 08:00 PM").valueOf();
    const updateClock = () => {
      const now = Date.now();
      const diff = (now - begin) / 1000 / 60 / 60 / 24 / 365;
      setYearsSinceInception(diff.toFixed(11) );
      setTimeout(updateClock, 1);
    };
    updateClock();
  }, []);

  return (
    <section className="parallax">
      <div className="parallax__content absolute top-[10%] sm:top-[16%] lg:top-[24%] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start z-10">
        
        <div className="flex-1 lg:mb-0 lg:pl-8">
          <h1 className={`font-medium text-white ${mobileTextSize} xs:text-[25px] sm:text-[34px] md:text-[40px] ${pcTextSize} leading-[55px] lg:leading-[30px] 2xl:leading-[80px]`}>
            CCRC
            <br />
            <span className="text-[#E9801A]">SCIENTIFIC</span>
            <br />
            <span className="text-[#04AE34]">CIRCLE</span>
          </h1>
          <br />
          <Position />
        </div>
        <div className="flex-1 flex justify-start lg:justify-end mt-4 sm:mt-14 ml-8 xs:ml-[-4vh] sm:ml-[-17vh] md:ml-[-26vh] lg:mt-10 2xl:mt-0">
          <div className=" text-[35px] text-stroke-primary sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white">
            <span className="text-left pr-40 leading-[40px] block sm:hidden">
              Excellence <br /> & <br />Innovation <br /> in <br /> CCRC
            </span>
            <span className="hidden sm:block">
              Cultivating Excellence & Innovation at CCRC, Since {yearsSinceInception} Years.
            </span>
          </div>
        </div>
      </div>

      <img className="parallax__stars" src="./parallax/1Stars.svg" alt="" />
      <img className="parallax__planets" src="./parallax/2Planets.svg" alt="" />
      <img
        className="parallax__mountain1"
        src="./parallax/3Mountain.svg"
        alt=""
      />
      <img
        className="parallax__mountain2"
        src="./parallax/4Mountain.svg"
        alt=""
      />
      <img className="parallax__crater" src="./parallax/5Crater.svg" alt="" />
      <img
        className="parallax__sun"
        src="./parallax/7SunwithCSClogo.svg"
        alt=""
      />

      <SpacemanCanvas scrollContainer={scrollContainer} />
    </section>
  );
};

export default Hero;