import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles';
import logo2 from '../../assets/logo2.png';

const UpperComponent: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const handleSingup = (event: React.SyntheticEvent) => {
    event.preventDefault();
    return history.push('/SingUp');
  };
  const handleSingIn = (event: React.SyntheticEvent) => {
    event.preventDefault();
    return history.push('/SingIn');
  };
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
          LinkShare Softwares
        </Typography>
        <Typography
          variant="body2"
          align="justify"
          color="textSecondary"
          paragraph
        >
          A LinkShare Softwares atua ativamente no mercado, buscando sempre
          expandir seus horizontes para atender as diversas capitais e regiões
          do país. Temos clientes espalhados por todo o território brasileiro,
          os quais tem nos tornado referência em seus locais de atuação. Esse
          processo gradativo de expansão tem nos permitido atender com qualidade
          nossos clientes, tornando o suporte cada vez mais acessível,
          sustentando a nossa missão e fazendo com que a inovação seja
          estabelecida em inúmeras empresas brasileiras. Essa experiência tem
          nos auxiliado e nos motivado a crescer!
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSingIn}
              >
                Entrar
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" onClick={handleSingup}>
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default UpperComponent;
