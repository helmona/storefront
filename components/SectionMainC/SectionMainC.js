
// import cn from 'classnames'

import Link from 'next/link'
import { useRouter } from 'next/router'


const SectionMainC = () => {
  
  return (
    <div className="container mx-auto flex w-full pt-16 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center h-full mr-5 ml-5 md:mr-0 md:ml-0">
        <div>
          <h1 className="text-41xl font-bold leading-tight tracking-huge mt-0 mb-2">ZEN<br/>COLLECTION</h1>
          <p className="text-sm">I led my intuition to follow the most relaxing forms and patterns. Like black and white in harmonious yin-yang, the whole creative process guided me into the circular particles, "O" and "D" shapes of very unique marble patterns made out of polymer clay. When I started to study a bit of geology and the process about how the original inorganics had melted together, it inspired me to create my own technique to reach a similar effect. Now, after months of experiments, I would like to proudly introduce you to my results.</p>

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

export default SectionMainC
