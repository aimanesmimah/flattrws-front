import React from 'react';
import {StyledAppTemplate,AppTemplateBody} from '../styledComponents.jsx';
import AppBar from './appBar.jsx';


const AppTemplate = ({title,children}) => (
     <StyledAppTemplate>
       <AppBar title={title} />
       <AppTemplateBody>
          {children}
       </AppTemplateBody>
     </StyledAppTemplate>
)

export default AppTemplate ;
