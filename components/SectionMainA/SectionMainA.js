import Link from 'next/link'
import { useRouter } from 'next/router'

const prefix = process.env.NEXT_PUBLIC_PREFIX;
console.log('process', process.env.NEXT_PUBLIC_PREFIX);

console.log(process.env);
const images = [{
  src: prefix + '/assets/helmona_geode_earing_turquoise.jpg',
  alt: 'Fantastic turquoise earnings easy to wear for any occassion'
}, {
  src: prefix + '/assets/helmona_geode_ring_turquoise.jpg',
  alt: 'Fantastic turquoise earnings easy to wear for any occassion'
}];

const SectionMainA = () => {
  
  return (
    <div className="container mx-auto flex w-full pt-16 pb-16  min-h-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center h-full mr-5 ml-5 md:mr-0 md:ml-0 pt-3">
        <div className="h-1/3">
          <h1 className="text-41xl font-bold leading-tight tracking-huge mt-0 mb-2">GEODE<br/>COLLECTION</h1>
          <p className="text-sm mb-6">These beautiful vibrant gems are part of my new geometric collection, they are handmade by me and each piece is unique. Made in bright fancy colors and presenting minimalistic modern design. Even though they are similar to each other, they are not identical due my own technique of crafting the polymeric materials.</p>

          <div className="flex justify-center">
            <a href="https://www.etsy.com/shop/HELMONA?ref=condensed_trust_header_title_updates&section_id=20981085" className="relative px-6 py-3 font-bold text-black group">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-graywhite group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
              <span className="relative">SHOW NOW</span>
            </a>
          </div>
        </div>

        <div className="w-full pt-24 md:pt-20">
          <div className="grid grid-cols-2 gap-5 lg:gap-2  w-full min-h-full">
            <div className="flex h-full">
              <img
                className="object-cover h-64 w-64"
                src={images[0].src} 
                alt={images[0].alt} />
            </div>
            <div className="flex justify-end">
              <img 
                className="object-cover h-64 w-64" 
                src={images[1].src} 
                alt={images[1].alt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionMainA
