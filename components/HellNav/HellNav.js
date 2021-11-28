import Logo from '@components/Logo'

const HellNav = () => {
  return (  
    <nav className = "sticky flex flex-col top-0 z-50 bg-graywhite p-2 items-center md:items-start">
      <div className="flex flex-shrink-0 md:container md:mx-auto justify-center">
        <a href="#" title="Welcome to Helmona Storefront">
          <Logo />
        </a>
      </div>
    </nav>
  )
}

export default HellNav
