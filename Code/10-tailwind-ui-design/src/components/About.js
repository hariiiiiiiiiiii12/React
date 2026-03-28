import React from 'react';
import UserClass from './UserClass';
import User from './UserFunction';

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('Parent constructor called');
  }

  componentDidMount() {
    console.log('Parent component did mount');
  }

  render() {
    console.log('Parent render called');

    return (
      <div>
        <h1>This is About Us Page</h1>
        {/* <User name={'Pedri Function'} /> */}
        <UserClass name={'First'} />
        <UserClass name={'Second'} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>This is About Us Page</h1>
//       <User name={'Pedri Function'} />
//       <UserClass name={'Pedri Class'} />
//     </div>
//   );
// };

export default About;
