import styled from 'styled-components';

import { darken } from 'polished';

export const ProductList = styled.ul`
  border-radius: 4px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  margin-top: 20px;

  li {
    background: #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      color: #333;
      font-size: 16px;
      line-height: 26px;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      align-items: center;
      background: #3f51b5;
      border: 0;
      border-radius: 4px;
      color: #fff;
      display: flex;
      margin-top: auto;
      overflow: hidden;

      &:hover {
        background: ${darken(0.03, '#3f51b5')};
      }

      div {
        align-items: center;
        background: rgba(0, 0, 0, 0.1);
        display: flex;
        padding: 12px;
      }

      > span {
        flex: 1;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
      }

      svg {
        margin-right: 5px;
      }
    }
  }
`;
