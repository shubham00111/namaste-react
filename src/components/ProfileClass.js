import { Component } from "react";

class ProfileClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
    };
  }

  componentDidMount() {}

  render() {
    return <div>Profileclass</div>;
  }
}

export default ProfileClass;
