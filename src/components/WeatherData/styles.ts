import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({theme}) => theme.card};
  border-radius: 25px;
  padding: 25px;

  display: flex;
  justify-content: space-between;
  align-items: end;

  img {
    width: 150px;
  }

  >div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    span {
      font-size: 60px;  
    }
    div {
      display: flex;
      align-items: end;
      margin-top: 10px;

      img {
        width: 12px;
        margin-right: 10px;
      }
      p {
        font-size: 15px;
      }
    }
  }
`;