import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 3.125rem 0 4.25rem;
  padding: 0.875rem 1.125rem;
  border: .5px solid ${({theme}) => theme.text_secundary};
  border-radius: 3.125rem;
  img {
    width: 1.25rem;
    margin-right: 1.25rem;
  }
  input {
    background-color: transparent;
    color: ${({theme}) => theme.text_secundary};
  }
  button {
    margin-left: auto;
    background: transparent;
    font-size: 15px;
    color: ${({theme}) => theme.card_secundary};
    text-shadow: 0px 0px 15px #0B47B4;
  }

  @media (max-width: 768px){
    button {
      font-size: 13px;
    }
  }
`;