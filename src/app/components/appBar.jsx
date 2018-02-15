import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import {Redirect} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
//import Cookies from 'universal-cookie';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {StyledAppBar,BarLeftBox,BarRightBox,StyledBarIcon, StyledLink} from '../styledComponents.jsx';
//import appLogo from '../common/images/facebookapp-logo.png';
import AppMenu from './appMenu.jsx';


class AppBar extends Component {
  constructor(props){
    super(props);
    this.state = {

    }

    this.onClick = this.onClick.bind(this);
  }

  onClick(e,item){
    alert('click');
  }

  render(){
  const {title} = this.props;
  return(
    <StyledAppBar>
        <BarLeftBox>
          <div>
            <StyledBarIcon src={require(`../../common/images/facebookapp-logo.png`)} alt="" />
          </div>
          <div>
            <AppMenu  title={title} />
          </div>
        </BarLeftBox>
        <BarRightBox>
          <div>
            <Avatar value="86%" name="cloud strife" round={true} size={50}
              style={{width : 50 , height : 50}} />
          </div>
          <div>
            <MuiThemeProvider>
              <IconMenu iconButtonElement={
                <IconButton touch={true}>
                   <NavigationExpandMoreIcon  />
                </IconButton>
              } >
                <MenuItem>
                  <StyledLink href="#/dashboard/account" >Account</StyledLink>
                </MenuItem>
                <MenuItem primaryText="Logout" onClick={(e)=>this.onClick(e,'logout')}/>
              </IconMenu>
            </MuiThemeProvider>
          </div>
        </BarRightBox>
  </StyledAppBar>
    )
  }
}

export default AppBar;
