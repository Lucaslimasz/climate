import styled from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
  text-align: center;

  span {
    font-size: 13px;
    color: ${({theme}) => theme.text_secundary};
    a {
      color: ${({theme}) => theme.text_secundary};
    }
  }
  @media (max-width: 600px){
    margin-top: 50px;
  }
`;
