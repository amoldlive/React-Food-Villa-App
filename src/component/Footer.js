import { androidDownload, appleDownload } from "./Constant";

const Footer = () => {
  return (
    <div className="flex bg-black">
      <div className="flex">
        <img className="h-10 w-30 m-3" key="appleDownload" src={appleDownload} alt="appleDownload" />
        <img className="h-10 w-30 m-3"
          key="androidDownload"
          src={androidDownload}
          alt="androidDownload"
        />
      </div>
      <div className="mt-4">
        <p className="font-semibold ml-72 text-center text-white">&copy;foodvilla@2023</p>
      </div>
      <div className="mt-4 w-full mr-4">
        <p className="font-semibold ml-72 text-center text-white float-right">Powered By - React-18 licenced 2023</p>
      </div>
    </div>
  );
};

export default Footer;
