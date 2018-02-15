import React, {PropTypes} from 'react';
import AppTemplate from '../appTemplate.jsx';

export default class SignIn extends React.Component {
  render() {
    return (
      <AppTemplate title="signin">
        <p>Sign In</p>
      </AppTemplate>
    );
  }
}

SignIn.propTypes = {
};
