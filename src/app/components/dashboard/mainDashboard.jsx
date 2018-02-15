import React, {PropTypes} from 'react';
import SearchField from './searchField.jsx';
import AppTemplate from '../appTemplate.jsx';

export default class Dashboard extends React.Component {
  render() {
    return (
      <AppTemplate title="dashboard">
        <SearchField />
      </AppTemplate>
    );
  }
}

Dashboard.propTypes = {
};
