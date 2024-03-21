import React from 'react'

const Bottom = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-10 gap-2 lg:gap-4 lg:py-10 pt-10 lg:pt-20">
        <img src="/board_s.png" className="w-48 lg:block sm:hidden hidden" />
        <img src="/board_s.png" className="w-28 sm:block lg:hidden block" />
        <div className="flex items-center">
          <img src="/board_l.png" className="w-74 sm:block lg:hidden block" />
          <img src="/board_l.png" className="w-108 lg:block sm:hidden hidden" />
        </div>
        <button className="absolute mt-20 pt-0 lg:pt-5">
          <img
            src="/button3.png"
            className="w-56 sm:block lg:hidden block mb-5"
          />
          <img src="/button3.png" className="w-72 lg:block sm:hidden hidden" />
        </button>
        <img
          src="/clock.png"
          className="w-20 absolute left-80 ml-20 mb-20 lg:block sm:hidden hidden"
        />
        <img
          src="/clock.png"
          className="w-14 absolute left-8 mb-10 sm:block lg:hidden block"
        />
        <img
          src="/line.png"
          className="w-30 h-36 mt-20 pt-6 absolute right-60 lg:block sm:hidden hidden"
        />
        <img
          src="/line.png"
          className="w-30 h-8 mb-10 pt-6 absolute right-0 sm:block lg:hidden block"
        />
        <img
          src="/coin.png"
          className="w-12 absolute right-6 mb-10 lg:right-60 lg:mb-20 pb-5 lg:block sm:hidden hidden"
        />
        <img
          src="/coin.png"
          className="w-8 absolute right-6 mb-10 lg:right-60 lg:mb-20 pb-5 sm:block lg:hidden block"
        />
        <img
          src="/line2.png"
          className="w-16 h-8 mb-10 bottom-10 ml-10 absolute left-60 -rotate-6 lg:block sm:hidden hidden"
        />
        <img
          src="/line2.png"
          className="w-16 h-8 mb-6 bottom-24 ml-20 absolute left-60 translate-x-2 -rotate-6 lg:block sm:hidden hidden"
        />
        <img
          src="/small_star.png"
          className="w-6 absolute bottom-72 right-60 mr-10 lg:block sm:hidden hidden"
        />
        <img
          src="/small_star.png"
          className="w-4 absolute right-10 bottom-40 mb-5 sm:block lg:hidden block"
        />
        <img
          src="/cube.png"
          className="w-10 absolute left-10 mb-10 lg:block sm:hidden hidden"
        />
        <img
          src="/cube.png"
          className="w-7 absolute left-2 mb-20 pb-10 sm:block lg:hidden block"
        />
        <img
          src="/line.png"
          className="w-12 h-36 absolute left-20 transform scale-x-[-5] lg:block sm:hidden hidden"
        />
      </div>
      <img
        src="/star.png"
        className="w-12 lg:block sm:hidden hidden absolute right-80 mr-20 -ml-10 bottom-60"
      />
      <img
        src="/star.png"
        className="w-8 sm:block lg:hidden bottom-40 block absolute right-24 mt-10"
      />
      <img
        src="/line.png"
        className="w-30 h-36 mt-20 pt-6 top-80 absolute right-80 lg:block sm:hidden hidden"
      />
      <img
        src="/line2.png"
        className="w-6 absolute left-10 bottom-20 sm:block lg:hidden block"
      />
      <img
        src="/line2.png"
        className="w-30 h-20 mt-20 pt-6 bottom-60 mb-10 absolute ml-20 left-80 lg:block sm:hidden hidden"
      />
      <img
        src="/top1.png"
        className="absolute left-20 top-40 w-6 lg:block sm:hidden hidden"
      />
      <img
        src="/top1.png"
        className="absolute left-10 top-40 mt-10 w-4 sm:block lg:hidden block"
      />
      <img
        src="/top1.png"
        className="absolute right-80 mr-20 top-60 mt-10 w-4 lg:block sm:hidden hidden"
      />
      <img
        src="/top1.png"
        className="absolute right-10 top-60 mt-10 pt-7 w-3 sm:block lg:hidden block"
      />
      <img
        src="/top2.png"
        className="absolute left-80 mr-20 ml-10 bottom-80 mt-10 w-3 lg:block sm:hidden hidden"
      />
      <img
        src="/top2.png"
        className="absolute left-20 bottom-60 mt-10 w-2 sm:block lg:hidden block"
      />
      <img
        src="/top2.png"
        className="absolute left-60 mr-20 ml-10 top-60 mt-10 w-3 lg:block sm:hidden hidden"
      />
      <img
        src="/top2.png"
        className="absolute left-20 top-60 mt-10 w-2 sm:block lg:hidden block"
      />
      <img
        src="/top3.png"
        className="absolute right-20 mr-20 ml-10 top-40 filter grayscale-100 mt-10 w-2 lg:block sm:hidden hidden"
      />
      <img
        src="/top3.png"
        className="absolute right-80 mr-20 ml-10 top-20 filter grayscale-100 mt-10 w-2 lg:block sm:hidden hidden"
      />
    </>
  )
}

export default Bottom
