import React from "react";
class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    /* intializing states  */
    this.state = { count: 1 };
    console.log("profile constructor... "+this.props.id);
  }

  /* calls first render */
  /* this will be called after render */
  /*  place to call api because its gets called after render */
  componentDidMount(){
      this.timer=  setInterval(()=>{
          console.log("Hello There !")
        },1000);

        console.log("profile component did mount ... "+this.props.id);
  }

  /* calls after every next render */
  componentDidUpdate(prevProps,prevState){
    console.log("profile component did update ... "+this.props.id);
  }

  componentWillUnmount(){
    /* Block to put clean up code */
    /* clear the interval  */
    clearInterval(this.timer);
    console.log("profile component will unmount ... "+this.props.id);
  }


  /* render method of react */
  render() {
    console.log("profile render function..."+this.props.id);
    return (
      <div className="Profile">
        <h1>{this.state.count}</h1>
        <button onClick={()=>{
            /* we do not mutate state directly */
            this.setState({count: this.state.count+1})
        }}>ClickMe</button>
      </div>
    );
  }
}

export default ProfileComponent;
