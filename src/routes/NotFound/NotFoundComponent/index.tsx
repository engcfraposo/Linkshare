import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles';
import logo2 from '../../../assets/logo2.png';

const NotFoundComponent: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="primary"
          gutterBottom
        >
          <img src={logo2} alt="logo" />
          <br />
          Error 404: A Pagina não foi encontrada
        </Typography>
      </Container>
    </div>
  );
};

export default NotFoundComponent;
