import React from 'react';

const produceSpans = (text, animation) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-bottom ${animation}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position = () => {
  return (
    <div className="relative cursor-default font-medium text-white text-[35px] xs:text-[25px] sm:text-[30px] md:text-[36px] 2xl:text-[66px] leading-[32px] 2xl:leading-[40px] w-full flex justify-center items-center mt-5 mb-10">
      <div className="absolute inset-0 top-[-30px] sm:top-[-10px] lg:top-0 flex flex-col items-center">
        <div className="text first absolute left-1 md:left-2 2xl:left-4 flex" aria-label="Software Developer">
          {produceSpans("Exploring Knowledge", "animate-textRotate1")}
        </div>
        <div className="text second absolute left-1 md:left-2 2xl:left-4 flex" aria-label="Content Creator">
          {produceSpans("Via Science ✨", "animate-textRotate2")}
        </div>
      </div>
    </div>
  );
};

export default Position;