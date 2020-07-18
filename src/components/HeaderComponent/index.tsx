import React from 'react';
import { useSelector } from 'react-redux';
import { MdShoppingBasket, MdPerson, MdExitToApp } from 'react-icons/md';
import { FaKey } from 'react-icons/fa';
import { RootState } from '../../store/modules/rootReducer';
import logo from '../../assets/logo.png';
import { Container, Links, Logout, StatusBar } from './styles';
import { useAuth } from '../../hooks/AuthContext';

const HeaderComponent: React.FC = () => {
  const { signOut } = useAuth();

  const cartStore = useSelector((state: RootState) => state.cart);
  const admin = localStorage.getItem('@LinkShare:user');
  const token = localStorage.getItem('@LinkShare:token');

  const handleLogout = (event: React.SyntheticEvent) => {
    event.preventDefault();
    signOut();
    return (window.location.href = '/SingIn');
  };

  return (
    <>
      <Container>
        <Links to="/">
          <img src={logo} alt="logo" />
          <div>
            <strong>LinkShare Softwares</strong>
          </div>
        </Links>
        <StatusBar>
          <Links to="/cart">
            <div>
              <strong>Meu Carrinho</strong>
              <span>{cartStore.length} itens</span>
            </div>
            <MdShoppingBasket size={36} color="#fff" />
          </Links>
          {admin ? (
            <Links to="/Admin">
              <FaKey size={36} color="#fff" />
            </Links>
          ) : (
            <></>
          )}
          {!token ? (
            <Links to="/SingIn">
              <MdPerson size={36} color="#fff" />
            </Links>
          ) : (
            <Logout onClick={handleLogout}>
              <MdExitToApp size={36} color="#fff" />
            </Logout>
          )}
        </StatusBar>
      </Container>
    </>
  );
};

export default HeaderComponent;
