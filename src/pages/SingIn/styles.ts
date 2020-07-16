import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  margin: 0 auto;
  padding: 30px;
  width: 400px;

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
