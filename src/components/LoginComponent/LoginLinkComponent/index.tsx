import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const LoginLinkComponent: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs>
        <Link href="#" variant="body2">
          Esqueci a senha
        </Link>
      </Grid>
      <Grid item>
        <Link href="/SingUp" variant="body2">
          Cadastre-se
        </Link>
      </Grid>
    </Grid>
  );
};

export default LoginLinkComponent;
