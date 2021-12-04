import { useWindowSize } from '@lib/hooks/useWindowSize';
import { ShopButton } from '@components';

var classNames = require('classnames');

const prefix = process.env.NEXT_PUBLIC_PREFIX;

const Contentcomponent = ({ mode, content }) => {
  const size = useWindowSize();
  const { title, subtitle, desc, link } = content;
  const containerClass = classNames({
    'flex flex-col flex-grow md:pt-20 h-full': true,
    'lg:pr-20 pr-0': mode === 'A',
    'lg:pl-20 pl-0': mode === 'B',
  })

  return (
    <div className={containerClass}>
      <h1 className="text-41xl font-bold leading-tight tracking-huge mt-16 mb-2">{ title }<br/>{ subtitle }</h1>
      <p className="text-sm mb-6">{ desc }</p>

      <div className="flex justify-center items-end mt-auto">
        { (size.width > '1024') && (
          <ShopButton 
            url={link.url}
            message={link.message} />
        )}
      </div>
    </div>
  )
};

const ImagesComponent = ({ mode, images, shopLink }) => {
  const size = useWindowSize();
  const largeImg = ' md:h-96 h-64 w-80';
  const squareImg = ' h-64 w-64';

  let firstImgClass = 'object-cover';
  let secondImgClass = 'object-cover';
  
  if (mode === 'A') {
    firstImgClass += largeImg;
    secondImgClass += squareImg;
  } else {
    firstImgClass += squareImg;
    secondImgClass += largeImg;
  }
  
  return (
    <div className="w-full pt-24 md:pt-20">
      <div className="grid grid-cols-2 gap-5 lg:gap-2 w-full min-h-full">
        <div className="flex h-full">
          <img
            className={firstImgClass}
            src={images[0].src} 
            alt={images[0].alt} />
        </div>
        <div className="flex justify-end">
          <img 
            className={secondImgClass} 
            src={images[1].src} 
            alt={images[1].alt} />
        </div>
      </div>
       <div className="flex justify-center items-end mt-auto">
        { (size.width <= '1024') && (
          <ShopButton 
            url={shopLink.url}
            message={shopLink.message} />
        )}
      </div>
    </div>
  );
};

const CustomMainSection = ({ images, content, mode }) => {
  const size = useWindowSize();

  const isMobile = (size.width < '1024');

  return (
    <div className="container mx-auto flex w-full pb-8  min-h-section">
      { (mode === 'A' || isMobile) ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center h-full mr-5 ml-5 md:mr-0 md:ml-0 pt-5">
          <Contentcomponent mode={mode} content={content} />
          <ImagesComponent mode={mode} images={images} shopLink={content.link} />
        </div>
      ) : ( 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center h-full mr-5 ml-5 md:mr-0 md:ml-0 pt-5">
          <ImagesComponent mode={mode} images={images} />
          <Contentcomponent mode={mode} content={content} shopLink={content.link} />
        </div>
      )}        
    </div>
  )
}

export default CustomMainSection
