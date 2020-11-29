import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  height: 64px;
  margin-top: auto;
  background: #1b1d29;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #4044fc;
    transition: color 0.2s;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #2e22ff;
    }
  }
`;
