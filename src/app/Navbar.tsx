import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { IoVolumeMediumOutline } from 'react-icons/io5'

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center bg-black text-white p-4 w-full border-b-2 border-gray-600 mb-5">
      <div className="flex items-center space-x-4 mb-2 sm:mb-0">
        <button className="p-2 flex items-center">
          <FaArrowLeftLong className="w-4 h-4 sm:w-6 sm:h-6 lg:w-6 lg:h-6 text-gray-600" />
          <h1 className="text-gray-500 text-sm sm:text-lg lg:text-lg lg:ml-2">
            Exit
          </h1>
        </button>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <img src="\ufo.png" className="h-7 w-7 lg:h-8 lg:w-9 lg:mr-2" />
        <div className="flex space-x-2 lg:space-x-8">
          {[...Array(13)].map((_, index) => (
            <div
              key={index}
              className="h-1 w-1 lg:h-1.5 lg:w-1.5 bg-gray-600 rounded-full"
            ></div>
          ))}
        </div>
        <img src="\game_box.png" className="h-7 w-7 lg:h-8 lg:w-8 lg:ml-2" />
        <img src="\cards.png" className="h-7 w-7 lg:h-8 lg:w-12" />
      </div>
      <div className="mt-2 sm:mt-0">
        <button className="p-2">
          <IoVolumeMediumOutline className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-gray-500" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
