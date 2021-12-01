
import CustomMainSection from '@components/CustomMainSection'
import HellFooter from '@components/HellFooter';
import MainBanner from '@components/MainBanner'

import { data } from '@lib/data/homepage';

export default function Home() {
  return (
    <div className="w-full h-screen">
      {
        // Main Banner
      }
      <MainBanner {...data.mainBanner} />
      
      {
        // Sections
      }
      <CustomMainSection {...data.sectionMainA } />
      <CustomMainSection {...data.sectionMainB } />
      <CustomMainSection {...data.sectionMainC } />

      { 
        // Separator 
      }
      <div className="flex h-1/5"></div>

      {
        // Footer
      }
      <HellFooter />
    </div>
  )
}
