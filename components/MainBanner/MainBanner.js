const MainBanner = ({ image, title, subtitle }) => (
  <main className="relative w-full h-4/5 overflow-hidden mb-16">
    <img 
      src={image}
      className="w-full h-full" 
      quality={100}
      layout="fill"
      style={{ objectFit: 'cover'}} 
    />

    <div className='absolute inset-0 z-10 flex flex-col justify-center text-6xl text-white font-semibold mr-5 ml-5 lg:mr-0 lg:ml-0 md:items-center'>
      <h1 className="text-41xl font-bold tracking-widest lg:tracking-huge lg:tracking-widest leading-tight -mt-20 lg:mt-0 text-black flex animate-fade-in-right font-sans">
        { title }
      </h1>
      <h4 className = "lg:text-2xl text-xl font-normal leading-normal mt-0 mb-2 text-white flex animate-fade-in-left font-sans">
        { subtitle }
      </h4>
    </div>
  </main>
)

export default MainBanner
