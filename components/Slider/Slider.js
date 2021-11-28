import { useState, useEffect } from 'react';
import Image from 'next/image'

/* const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`
}
 */
const Slider = ({images}) => {
  const [current, setCurrent] = useState(1);

  
  /* useEffect(() => {
    setTimeout(() => { 
      setCurrent(current === (images.length - 1) ? 0 : ++current);
    }, 3000);
  }, [current, images]); */

  return (
    
    <div className="flex w-full overflow-hidden">
      <div className="relative w-full h-2/3 aspect-w-16 aspect-h-9">
        <img 
          className="absolute object-scale-down w-full h-auto"
          src={images[current].src}
          alt={images[current].alt}
          quality={100}
          style={{ backgroundPosition: '0px -300px'}}
          /* width={'100%'}
          height={'auto'} */
          // layout="responsive"
          // layout="fill"  // required
          // style={{width: "100%", height: "auto"}}
          // objectFit="cover" // change to suit your needs
        />
        <div className='absolute inset-0 z-10 flex flex-col justify-center items-center text-6xl text-white font-semibold'>
          <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-white flex animate-fade-in-right">
            {images[current].title}
          </h1>
          <h4 className="text-3xl font-normal leading-normal mt-0 mb-2 text-white flex animate-fade-in-left">
            {images[current].title}
          </h4>
        </div>
      </div>
    </div>
  )
}
  



export default Slider
