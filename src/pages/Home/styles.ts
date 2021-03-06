import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 1.4rem 1.8rem;
  height: calc(100vh - 68px);

  @media (min-width: 768px){
    padding: 1.8rem 0;
    max-width: 768px;
    margin: auto;
  }
`;