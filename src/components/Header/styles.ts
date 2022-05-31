import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 768px;
  margin: auto;
  padding: 20px;

  img {
    width: 25px;
  }

  h2 {
    transition: color .5s linear;
    color: ${({theme}) => theme.title};
  }
`;