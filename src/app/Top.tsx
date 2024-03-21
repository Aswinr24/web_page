'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CSSProperties } from 'react'
import { GoGlobe } from 'react-icons/go'

const INDEX = [1, 2]
const CARD_OFFSET = 10
const SCALE_FACTOR = 0.06

const Top = () => {
  const data = [
    {
      title: '1. MINT THE NFT ON ZORA',
      description:
        'You can mint this nft using supporting networks such as Polygon, Arbitrum, Optimisim, Blast and Base',
    },
    {
      title: '2. MINT THE NFT ON ZORA',
      description:
        'You can mint this nft using supporting networks such as Polygon, Arbitrum, Optimisim, Blast and Base',
    },
  ]

  const [titles, setTitles] = useState<string[]>(data.map((item) => item.title))
  const [descriptions, setDescriptions] = useState<string[]>(
    data.map((item) => item.description)
  )
  const [cards, setCards] = useState<number[]>(INDEX)

  const cardStyle: CSSProperties = {
    position: 'absolute',
    transformOrigin: 'top center',
    listStyle: 'none',
  }

  function moveToEnd<T>(array: T[], from: number) {
    const newArray = [...array]
    const movedElement = newArray.splice(from, 1)[0]
    newArray.push(movedElement)
    return newArray
  }

  const handleDragEnd = (index: number) => {
    const newCards = moveToEnd(cards, index)
    const newTitles = moveToEnd(titles, index)
    const newDesc = moveToEnd(descriptions, index)
    setCards(newCards)
    setTitles(newTitles)
    setDescriptions(newDesc)
  }

  const handleClickLeftArrow = () => {
    const newCards = moveToEnd(cards, 0)
    const newTitles = moveToEnd(titles, 0)
    const newDesc = moveToEnd(descriptions, 0)
    setCards(newCards)
    setTitles(newTitles)
    setDescriptions(newDesc)
  }

  const handleClickRightArrow = () => {
    const newCards = moveToEnd(cards, 0)
    const newTitles = moveToEnd(titles, 0)
    const newDesc = moveToEnd(descriptions, 0)
    setCards(newCards)
    setTitles(newTitles)
    setDescriptions(newDesc)
  }

  return (
    <div className="flex gap-3 top-0 mt-0 mb-20 pb-10 relative">
      <div className="lg:block xl:block hidden sm:hidden">
        <img
          src="/arrow.png"
          className="max-w-full max-h-full xl:w-15 xl:h-12 lg:w-15 lg:h-12 mt-60 px-10 mr-5"
          onClick={handleClickLeftArrow}
        />
      </div>

      <div className="lg:hidden xl:hidden block sm:block">
        <img
          src="/arrow.png"
          className="w-10 h-8 mt-40 absolute left-0"
          onClick={handleClickLeftArrow}
        />
      </div>

      <div className="m-0 flex justify-center items-center pr-10 mr-10 lg:pr-20 lg:mr-40 xl:pr-20 xl:mr-40">
        <ul className="relative px-10 pr-10 lg:pr-0 lg:px-0 lg:mr-0 mr-10 mb-20">
          {cards.map((color, index) => {
            const canDrag = index === 0

            return (
              <motion.li
                key={color}
                className="absolute h-[240px] w-[160px] lg:h-[324px] lg:w-[215px]"
                style={{
                  ...cardStyle,
                  backgroundColor: 'white',
                  cursor: canDrag ? 'grab' : 'auto',
                }}
                animate={{
                  top: index * CARD_OFFSET,
                  scale: 1 - index * SCALE_FACTOR,
                  zIndex: INDEX.length - index,
                  transformOrigin: 'top right',
                  rotate: index > 0 ? -1 - index * 1.5 : 0,
                }}
                drag={canDrag ? 'x' : false}
                dragConstraints={
                  canDrag ? { top: 0, bottom: 0, left: 0, right: 0 } : false
                }
                dragElastic={1}
                dragMomentum={false}
                onDragEnd={(event, info) => {
                  if (info.offset.x) {
                    handleDragEnd(index)
                  }
                }}
              >
                <div className="relative w-full h-full overflow-hidden border-8 border-white bg-white">
                  <div className="w-full pt-10 pb-3 lg:pb-1 lg:pt-20 px-2 border-2 border-black font-sans font-semibold text-black lg:text-sm text-[10px]">
                    <h1 className="text-[16px] lg:text-2xl font-bold pt-9">
                      {titles[index]}
                    </h1>
                    {descriptions[index]}
                  </div>
                  <div className="bg-customYellow border-l-2 border-r-2 border-black">
                    <div className="px-2 py-0 lg:pl-2 flex lg:py-1 w-full font-sans underline text-md border-b-2 cursor-pointer border-black text-black">
                      <div className="flex lg:ml-4 pl-3 text-xs lg:text-lg py-1 pb-1 lg:py-0 lg:pb-0">
                        {' '}
                        <GoGlobe className="h-6 w-6 mr-2 lg:block sm:hidden hidden" />
                        <GoGlobe className="h-4 w-4 mr-2 lg:hidden sm:block block" />{' '}
                        Visit Jupiter
                      </div>
                    </div>
                  </div>
                </div>
              </motion.li>
            )
          })}
        </ul>
      </div>
      <img
        src="/arrow.png"
        className="w-10 h-8 mt-40 sm:block block lg:hidden xl:hidden transform scale-x-[-1]"
        onClick={handleClickRightArrow}
      />
      <img
        src="/arrow.png"
        className="w-15 h-12 mt-60 sm:hidden lg:block xl:block hidden transform mr-10 pr-10 scale-x-[-1]"
        onClick={handleClickLeftArrow}
      />
    </div>
  )
}

export default Top
