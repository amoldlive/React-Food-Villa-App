import { androidDownload, appleDownload } from "./Constant";

const Footer = () => {
  return (
    <div className="footer">
      <div className="app-download">
        <img key="appleDownload" src={appleDownload} alt="appleDownload" />
        <img
          key="androidDownload"
          src={androidDownload}
          alt="androidDownload"
        />
      </div>
      <div className="copyright">
        <p>&copy;foodvilla@2023</p>
      </div>
    </div>
  );
};

export default Footer;
