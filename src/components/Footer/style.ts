import styled from 'styled-components';

export const Foot = styled.footer`
  max-width: 100vw;
  height: 30px;
  background: #090909;
  display: flex;
  /* position: relative; */
  align-items: center;
  justify-content: center;

  p {
    color: #555555;
    font-size: 10px;
    transition: 0.2s;
    letter-spacing: 2px;

    cursor: pointer;
    transition: all 0.5s ease-in-out;

    strong {
      color: #a48b00;
      transition: all 0.5s ease-in-out;
    }

    &:hover {
      letter-spacing: 5px;

      color: #dfdfdf;
      strong {
        color: #eac400;
      }
    }
  }
`;
