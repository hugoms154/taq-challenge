import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 264px;
  width: 100%;
  height: 64px;
  border-radius: 16px;
  outline: none;
  border: none;

  color: #fff;
  font-weight: bold;

  background: #4044fc;
  transition: background-color 0.2s;

  &:hover {
    background: #2e22ff;
  }
`;
