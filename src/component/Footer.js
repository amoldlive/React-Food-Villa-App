import {applestore} from "../asset/img/applestore.png"

const Footer = () => {
  return (
    <div className="footer">
        <img key="applestore" src={applestore} alt="applestore"/>
        <p>&copy;foodvilla@2023</p>
    </div>
  );
};

export default Footer;
