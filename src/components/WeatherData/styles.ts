import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({theme}) => theme.card};
  border-radius: 25px;
  padding: 25px;

  display: flex;
  justify-content: space-between;
  align-items: end;

  img {
    width: 150px;
  }

  div {
    span {
      font-size: 60px;
    }
    > p {
      margin: 10px 0 0 40px;
    }
  }
`;