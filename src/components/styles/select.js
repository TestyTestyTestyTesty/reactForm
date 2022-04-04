import styled from "styled-components";

export const StyledSelect = styled.select`
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
