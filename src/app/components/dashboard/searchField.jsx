import React, {PropTypes} from 'react';
import $ from 'jquery';
import {StyledSearchField} from '../../styledComponents.jsx';


export default class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    e.preventDefault();
    alert($('.podcast-search-input').val());
  }
  render() {
    return (<StyledSearchField>
       <input type="text" className="podcast-search-input"
         placeholder="Look for your best podcasts shows" />
       <button type="submit" onClick={this.onClick}>start off</button>
    </StyledSearchField>);
  }
}

SearchField.propTypes ={
};
