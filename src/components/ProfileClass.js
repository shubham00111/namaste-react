import { Component } from "react";

class ProfileClass extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count1: 0,
      count2: 0,
    };
    console.log("constructor ");
  }

  componentDidMount() {
    console.log("component has mounted ");
  }

  render() {
    console.log("render");
    return <div>Profileclass</div>;
  }
}

export default ProfileClass;
