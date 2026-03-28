import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
      // count2: 2,
      userInfo: {
        name: 'Dummy name',
        location: 'dummy location',
      },
    };
    // console.log(this.props);
    console.log(this.props.name + 'Child constructor called');
  }

  async componentDidMount() {
    console.log(this.props.name + 'Child Component Did Mount');
    const data = await fetch('https://api.github.com/users/akshaymarch7');
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate is called');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount is called');
  }

  render() {
    console.log(this.props.name + 'Child render called');
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h2>{this.props.name}</h2>
        <h2>Count1 - {this.state.count}</h2> */}
        <h2>{name}</h2>
        <h2>{location}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Counter Increment
        </button>
        <h2>Count2 - {this.state.count2}</h2>
        <h2>Role: Cooks</h2>
        <h2>Location: Barcelona</h2>
      </div>
    );
  }
}

export default UserClass;
