import React from 'react';
import { useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const SingupLinkComponent: React.FC = () => {
  const history = useHistory();
  const handleSingIn = (event: React.SyntheticEvent) => {
    event.preventDefault();
    return history.push('/SingIn');
  };
  return (
    <Grid container justify="flex-end">
      <Grid item>
        <Link variant="body2" onClick={handleSingIn}>
          Já possui cadastro? Faça seu Login
        </Link>
      </Grid>
    </Grid>
  );
};

export default SingupLinkComponent;
