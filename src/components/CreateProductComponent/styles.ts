import { ErrorMessage, Formik, Form, Field } from 'formik';
import styled from 'styled-components';

export const FormikError = styled(ErrorMessage)`
  color: #ffb3b3;
  padding: 0.25rem 0;
`;

export const FormikContainer = styled(Formik)``;

export const FormikForm = styled(Form)`
  margin-bottom: 2.25rem;
  margin-top: 2.25rem;
  position: relative;
`;

export const FormikField = styled(Field)`
  border: 0px;
  border-bottom: 1px solid #3f51b5;
  color: #3f51b5;
  font-size: 12px;
  padding: 0.5rem 1rem;
  transition: all 0.2s linear;
  &::-webkit-file-upload-button {
    background: #3f51b5;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 12px 20px;
    transition: background 0.2s;
  }
  &::placeholder {
    color: #3f51b5;
    font-size: 12px;
  }
`;

export const FormikGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding: 5px;
  width: 100%;
`;

export const FormikLine = styled.div`
  display: flex;
  flex-direction: row;
`;
