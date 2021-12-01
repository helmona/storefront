import Slider from '@components/Slider';

const debug = process.env.NODE_ENV !== "production";

const prefix = debug ? '/storefront/' : '/storefront/';

const images = [
  {
    title: 'title1',
    subtitle: 'subtitle 1',
    src: prefix + 'assets/_MG_4432.JPG',
    alt: "message 1",
    position: '0px 0px',
  }, {
    title: 'title 2',
    subtitle: 'subtitle 2',
    src: prefix + 'assets/_MG_4660.JPG',
    alt: "message 1",
    position: '0px -300px',
  }, {
    title: 'title 3',
    subtitle: 'subtitle 3',
    src: prefix + 'assets/DSC_0032.jpg',
    alt: "message 1",
  },
];

const MainBanner = () => (
  <div className="flex w-full h-2/3">
    <Slider images={images} />
  </div>
)

export default MainBanner
