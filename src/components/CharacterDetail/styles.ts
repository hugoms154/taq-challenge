import styled from 'styled-components';

interface IDetailContainerProps {
  visibility: 'visible' | 'hidden';
}

const visibilityStatus = {
  visible: 'visible',
  hidden: 'hidden',
};

export const Container = styled.div<IDetailContainerProps>`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${props => visibilityStatus[props.visibility]};
  z-index: 999;
`;

export const CarouselContainer = styled.div`
  width: 300px;
  margin-top: 24px;
  padding: 0 8px;

  .rec.rec-arrow:hover {
    background: #4044fc;
  }
  .rec.rec-arrow:focus {
    background: #2e22ff;
  }
`;

export const DetailContent = styled.div`
  position: relative;
  background: #f8f8f9;

  max-width: 768px;
  width: 100%;
  min-height: 300px;
  margin: 15%;

  border-radius: 12px;

  display: flex;
  flex: 1;
  flex-wrap: wrap;

  .goBack {
    position: absolute;
    top: 8px;
    right: 16px;
    color: #fff;
    font-weight: bold;
    background: #fc5f58;
    padding: 4px 12px;
    border-radius: 12px;
    box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.75);
    cursor: pointer;
  }

  img {
    display: flex;
    border-radius: 12px 0 0 12px;
    background: red;
    width: 300px;
    height: 300px;
  }

  main {
    margin: 28px auto;
    /* padding: 0 24px; */
    text-align: center;

    span {
      display: block;
      margin-top: 8px;
    }
  }
`;
