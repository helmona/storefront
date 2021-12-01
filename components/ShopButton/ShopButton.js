
const ShopButton = ({ url, message }) => (
  <a 
    href={url} 
    className="relative px-6 py-3 font-bold text-black group"
    target="_blank">
    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-graywhite group-hover:translate-x-0 group-hover:translate-y-0"></span>
    <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
    <span className="relative">{ message }</span>
  </a>
);

export default ShopButton;
