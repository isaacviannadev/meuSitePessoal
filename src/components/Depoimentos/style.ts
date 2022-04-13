import styled from 'styled-components';

export const ContainerSC = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 45px;

  width: 100%;
  height: 100%;
  padding: 0 20px;
  max-height: 420px;
  align-items: flex-start;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    column-gap: 0;
    padding: 0 20px;
    align-items: center;

    row-gap: 10px;
    max-height: 400px;
  }
`;

export const FotoDepoSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  height: 100%;

  img {
    width: 350px;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;

    transition: all 0.2s ease-in-out;

    &:hover {
      transform: translate(3px, -5px);
      box-shadow: 4px 4px 12px 3px rgba(0, 0, 0, 0.4);
    }
  }
  @media only screen and (max-width: 768px) {
    width: 160px;
    height: 160px;

    img {
      width: 160px;
      box-shadow: 4px 4px 12px 3px rgba(0, 0, 0, 0.4);
    }
  }
`;

export const AreaDepoSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  padding: 40px 0 0;
  position: relative;

  .aspas {
    position: absolute;
    width: 100px;
    height: 100px;
    z-index: -1;
    top: 0;
    left: -20px;

    svg {
      width: 100%;
      height: 100%;
      fill: var(--textYellow);
      opacity: 0.2;
    }
  }

  .subtitle {
    font-size: 1.5rem;
    color: var(--textWhite);
    line-height: initial;
  }

  .autor {
    display: block;

    p {
      font-size: 1.5rem;
      color: var(--textYellow);
    }
    span {
      font-size: 1.2rem;
      color: var(--textSecondary);
    }
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 20px 0 0;

    .aspas {
      width: 50px;
      height: 50px;
      left: -10px;
    }

    .subtitle {
      font-size: 14px;
      line-height: initial;
    }

    .autor {
      p {
        font-size: 1rem;
      }
      span {
        font-size: 0.8rem;
      }
    }
  }
`;
