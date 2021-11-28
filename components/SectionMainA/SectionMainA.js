
// import cn from 'classnames'

import Link from 'next/link'
import { useRouter } from 'next/router'


const SectionMainA = () => {
  
  return (
    <div className="container mx-auto flex w-full pt-16 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center h-full mr-5 ml-5 md:mr-0 md:ml-0">
        <div>
          <h1 className="text-41xl font-bold leading-tight tracking-huge mt-0 mb-2">GEODE<br/>COLLECTION</h1>
          <p className="text-sm">These beautiful vibrant gems are part of my new geometric collection, they are handmade by me and each piece is unique. Made in bright fancy colors and presenting minimalistic modern design. Even though they are similar to each other, they are not identical due my own technique of crafting the polymeric materials.</p>

          <div className="flex justify-center items-end">
            <a href="#_" className="relative px-6 py-3 font-bold text-black group">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-graywhite group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
              <span className="relative">SHOW NOW</span>
            </a>
            
          </div>
        </div>

        <div className="grid grid-cols-2 w-full">
          <div className="flex">
            <img src = "https://images.placeholders.dev/?width=200&height=300&text=img&bgColor=%23f7f6f6&textColor=%236d6e71" alt="img 1" />
          </div>
          <div className="flex">
            <img src = "https://images.placeholders.dev/?width=200&height=300&text=img&bgColor=%23f7f6f6&textColor=%236d6e71" alt="img 1" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionMainA
