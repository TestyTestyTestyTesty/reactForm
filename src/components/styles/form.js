import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  margin: 50px auto;
`;
export const StyledRow = styled.div`
  width: 100%;
  margin: 0 0 20px 0;
  display: block;
  &:last-of-type {
    margin: 0;
  }
`;
export const StyledLabel = styled.label`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;
export const StyledInput = styled.input`
  font-size: 14px;
  line-height: 28px;
  color: #3c3b73;
  margin: 0;
  border: 1px solid #d7d7ef;
  border-radius: 0;
  box-sizing: border-box;
  transition: all 0.2s ease;
  outline: 0;
  padding: 15px 10px 15px 20px;
  width: 100%;
  font-weight: 500;
  ${({ error }) =>
    error &&
    `
    border-color: red;
  `}
`;
export const StyledError = styled.p`
  display: flex;
  justify-content: center;
  margin: 10px 0 0;
`;

export const StyledSubmit = styled.input`
  background: #3c3b73;
  color: #fff;
  height: 60px;
  display: flex;
  padding: 0 37px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.3s;
  width: 100%;
  border: none;
  max-width: 300px;
  margin: 0 auto;
  &:hover {
    background: #4b3fdb;
  }
`;
