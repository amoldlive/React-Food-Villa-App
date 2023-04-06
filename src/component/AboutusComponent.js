import { Component } from "react";

class AboutusComponent extends Component {
  constructor(props) {
    super(props);
    console.log("About us constructor");
  }

  componentDidMount() {
    console.log("About us component did mount");
  }
  render() {
    console.log("About us render");
    return <div>About Us</div>;
  }
}

export default AboutusComponent;
