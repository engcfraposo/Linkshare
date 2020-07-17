import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Footer } from './styles';

function Copyright() {
  return (
    <Typography variant="h6" color="inherit" align="center">
      {'Copyright © '}
      <Link color="primary" href="https://github.com/engcfraposo">
        engcfraposo
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const FooterComponent: FunctionComponent = () => {
  return (
    <Footer>
      <Copyright />
    </Footer>
  );
};

export default FooterComponent;
