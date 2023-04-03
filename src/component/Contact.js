import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <>Contact US : 123456</>
      <Link to="/contact/profile"> <div>Show Profile </div></Link>
      <Outlet/>
    </div>
  );
};

export default Contact;
