import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 30px;

  footer {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    button {
      background: #3f51b5;
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      padding: 12px 20px;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3f51b5')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    margin-top: 5px;
    font-size: 18px;
    display: block;
    font-weight: bold;
  }

  div {
    display: flex;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 6px;
      width: 60px;
      text-align: center;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  align-items: baseline;
  display: flex;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
