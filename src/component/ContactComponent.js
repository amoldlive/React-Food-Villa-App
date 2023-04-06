import { Link, Outlet } from "react-router-dom";
import { Component } from "react";
import ProfileComponent from "./ProfileComponent";

class ContactComponent extends Component {
  constructor(props) {
    super(props);
    console.log("contact construtor ");
  }

  componentDidMount() {
    console.log("contact component did mount ");
  }

  render() {
    console.log("contact render ");
    return (
      <div>
        <>Contact US : 123456</>
        <ProfileComponent id={1}/>
        <ProfileComponent id={2}/>
        <Link to="/contact/profile">
          {" "}
          <div>Show Profile </div>
        </Link>
        <Outlet />
      </div>
    );
  }
}
export default ContactComponent;
