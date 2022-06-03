import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 25px;
  padding: 25px 60px;

  display: flex;
  justify-content: space-between;
  align-items: end;

  img {
    max-height: 113px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    span {
      font-size: 60px;
    }
    > p {
      color: ${({theme}) => theme.text_secundary};
      font-size: 12px;
      margin-top: 4px;
      text-transform: capitalize;
    }
    div {
      display: flex;
      align-items: center;
      margin-top: 4px;

      img {
        width: 10px;
        margin-right: 5px;
      }
      p {
        font-size: 15px;
      }
    }
  }
`;
