import styled from 'styled-components';

export const CardContainer = styled.article`
  max-width: 332px;
  padding: 16px;
`;

interface ICardProps {
  status: 'Alive' | 'unknown' | 'Dead';
}

const colorsStatus = {
  Alive: '#32fc7b',
  unknown: '#656d78',
  Dead: '#fc5f58',
};

export const CardContent = styled.div<ICardProps>`
  background: #fff;
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.6;
  }

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
    text-align: center;
    padding: 0 16px;
  }

  footer {
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 32px;
    margin: 16px 0;

    .status {
      background: ${props => colorsStatus[props.status]};
      font-size: 16px;
      padding: 0 16px;
      border-radius: 12px;

      font-weight: bold;
      color: ${props => (props.status === 'Alive' ? '#000' : '#fff')};
    }
  }
`;
