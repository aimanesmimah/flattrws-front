import React from 'react';
import $ from 'jquery';
import {StyledAppMenu,AppMenuItem,AppMenuLink} from '../styledComponents.jsx';


class AppMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render(){
    const {title} = this.props;
    return (
    <StyledAppMenu>
      <AppMenuItem active={title === "shows"} >
        <AppMenuLink  href="#/conversation" >
             shows
        </AppMenuLink>
      </AppMenuItem>
      <AppMenuItem active={title === "account"}>
        <AppMenuLink  href="#/texting" >
            account
        </AppMenuLink>
      </AppMenuItem>
    </StyledAppMenu>
  )
  }
}

export default AppMenu ;
