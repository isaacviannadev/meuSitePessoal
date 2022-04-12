import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  to {
    opacity: 1;
} 
`;

type StyleProps = {
  isDark?: boolean;
  paddingTopOn?: boolean;
};

export const ContainerSC = styled.main`
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 60px 0;
  margin: 0 auto;
  height: 100%;
  max-height: 600px;
  overflow: hidden;
  justify-content: space-between;
  background: transparent;
`;

export const FirstSectionSC = styled.section<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  &:first-of-type {
    margin-top: 60px;
  }

  ${({ isDark }) =>
    isDark &&
    css`
      background: var(--bgDarkSecondary);
    `};

  @media only screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const ContentSC = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  justify-content: space-around;

  & .separator {
    display: none;
    width: 100%;
    border-top: 1px dashed var(--textYellow);
    margin: 20px 0;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    & .separator {
      display: flex;
    }
  }
`;

export const ConteudoSC = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 420px;
  padding: 0 20px 20px;
  ${({ paddingTopOn }) =>
    paddingTopOn &&
    css`
      padding-top: 20px;
    `};

  .links {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 20px;
    min-height: 60px;

    p {
      font-size: 1.5rem;
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

  @media only screen and (max-width: 768px) {
    max-width: 100%;

    .links {
      align-items: center;
      margin-bottom: 20px;

      gap: 0;

      p {
        font-size: 1rem;
        font-weight: 500;
        position: relative;
        transition: all 0.2s ease-in-out;
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
    font-size: 2.5rem;
    color: var(--textWhite);
    line-height: 50px;
  }

  p {
    color: var(--textSecondary);
    line-height: 30px;
  }

  @media only screen and (max-width: 768px) {
    .subtitle {
      font-size: 2rem;
    }
  }
`;

export const LinkFowardSC = styled.a`
  display: inline;
  color: var(--textYellow);
  font-weight: 500;
  font-size: 20px;
  transition: all 0.2s ease-in-out;
  width: fit-content;
  margin-top: 20px;

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
