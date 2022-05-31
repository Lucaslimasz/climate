import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1.875rem;

  h2 {
    font-size: 1rem;
    color: ${({theme}) => theme.text_secundary};
    margin-bottom: 0.94rem;
  }

  .containerCards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;

    overflow-y: auto;
  }
  
  .card {
    padding: 1.25rem;
    border-radius: 1.25rem;
    max-width: 300px;

    background-color: ${({theme}) => theme.card};

    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;

      span {
        font-size: 30px;
        strong {
          font-size: 20px;
        }
      }

      b {
        margin-top: 10px;
      }
    }

    img {
      width: 100px;
    }

    .informations {
      div {
        display: flex;
        align-items: center;
        flex-direction: row;
        span {
          font-size: 40px;
        }
        strong {
          font-size: 16px;
          font-weight: 400;
        }
      } 
      >b {
        font-size: 16px;
      }

      > p {
        margin-top: 2px;
        font-size: 12px;
        color: ${({theme}) => theme.text_secundary};
      }
    }
  }
`;