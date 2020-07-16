import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
`;

export const Links = styled(Link)`
  align-items: center;
  display: flex;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    margin-right: 10px;
    text-align: right;

    strong {
      color: #fff;
      display: block;
    }

    span {
      color: #999;
      font-size: 12px;
    }
  }
`;

export const Logout = styled.button`
  background: #141419;
  border: none;

  &:hover {
    opacity: 0.7;
  }
`;

export const StatusBar = styled.div`
  display: flex;
  flex-direction: row;
`;
