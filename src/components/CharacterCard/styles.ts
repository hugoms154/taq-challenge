import styled from 'styled-components';

export const CardContainer = styled.article`
  max-width: 332px;
  padding: 16px;
`;

export const CardContent = styled.div`
  background: #fff;
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;

  header {
    img {
      max-width: 300px;
      border-radius: 12px 12px 0 0;
    }
  }

  h2 {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  footer {
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 32px;
    margin: 16px 0;

    .status {
      margin-right: 8px;
      margin-top: -3px;

      // #fc5f58
      // #32fc7b
      // #fcd426
      // #656d78
      color: #656d78;
      font-size: 32px;
    }
  }
`;
