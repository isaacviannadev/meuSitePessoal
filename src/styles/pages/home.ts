import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  to {
    opacity: 1;
} 
`;

export const ContainerSC = styled.main`
  display: flex;
  width: 100%;
  max-width: 1080px;
  padding: 60px 0;
  margin: 0 auto;
  height: 100%;
  max-height: 600px;
  overflow: hidden;
  justify-content: space-between;
  background: transparent;

  .euDetalhes {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
    background-color: transparent;
    z-index: 2;

    width: fit-content;
    /* max-width: 320px; */
    /* padding: 0 0 100px; */

    .logo {
      width: 100%;
      max-width: 200px;
    }

    .nome {
      display: flex;
      flex-direction: column;
      position: relative;
      margin-bottom: 80px;

      p {
        line-height: 100%;
        margin-left: 30px;
        font-size: 60px;
        font-weight: 500;
        letter-spacing: 5px;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -30px;
        left: 30px;
        width: 35px;
        height: 6px;
        background-color: var(--textYellow);
      }
    }

    .minhasRedes {
      display: flex;
      flex-direction: row;
      gap: 10px;

      svg {
        width: 24px;
        height: 24px;
        color: var(--textSecondary);
        transition: all 0.2s ease-in-out;

        &:hover {
          box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.27);
          transform: translateY(-5px);
          color: var(--textWhite);
        }
      }
    }
  }
`;

export const FirstSectionSC = styled(ContainerSC)`
  position: relative;

  .foto {
    position: absolute;
    width: 100%;
    max-width: 400px;
    bottom: 0;
    animation: fadeIn 0.5s ease-in forwards;
    filter: drop-shadow(5px -3px 10px rgba(0, 0, 0, 0.7));
  }
`;

export const SectionDarkSC = styled.section`
  display: flex;
  width: 100%;
  padding: 60px 40px;
  margin: 0;
  height: 100%;
  min-height: 500px;

  background: var(--bgDarkSecondary);
`;

export const ConteudoSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* padding: 0 0 100px; */
  width: 100%;
  max-width: 420px;
  overflow: hidden;

  .links {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 20px;
    height: 60px;

    p {
      font-size: 24px;
      font-weight: 500;
      position: relative;
      transition: all 0.2s ease-in-out;
    }

    .selected {
      p {
        &::after {
          content: '';
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--textYellow);
          bottom: -12px;
          left: 50%;
        }
      }
    }

    .unselected {
      p {
        color: var(--textUnselected);
      }
    }
  }
`;

export const DescricaoSC = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  width: 100%;

  span {
    color: var(--textSecondary);
  }

  .subtitle {
    font-size: 40px;
    color: var(--textWhite);
    line-height: 50px;
  }

  p {
    color: var(--textSecondary);
    line-height: 30px;
  }
`;

export const LinkFowardSC = styled.a`
  display: inline;
  color: var(--textYellow);
  font-weight: 500;
  font-size: 20px;
  transition: all 0.2s ease-in-out;
  width: fit-content;

  svg {
    margin-left: 12px;
    margin-right: 0;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const LinkBackSC = styled(LinkFowardSC)`
  svg {
    margin-left: 0;

    margin-right: 12px;
  }
`;

export const CardContainerSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
`;
