import styled, { keyframes } from 'styled-components';

const FadeUp = keyframes`
  from {
    transform: translateY(-101%)
  }
  to {
    transform: translateY(101%)
  }
`;

const FadeDown = keyframes`
  from {
    transform: translateY(101%)
  }
  to {
    transform: translateY(-101%)
  }
`;

export const ContainerSC = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 45px;

  width: 100%;
  height: 100%;
  padding: 60px;
  align-items: flex-start;
  justify-content: center;
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

    transition: all 0.2s ease-in-out;

    &:hover {
      transform: translate(3px, -5px);
      box-shadow: 4px 4px 12px 3px rgba(0, 0, 0, 0.4);
    }
  }
`;

export const AreaDepoSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  .subtitle {
    font-size: 36px;
    color: var(--textWhite);
    line-height: 50px;
  }

  .autor {
    display: block;

    p {
      font-size: 28px;
      color: var(--textYellow);
    }
    span {
      font-size: 16px;
      color: var(--textSecondary);
    }
  }
`;

export const NavDepoSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: fit-content;
  height: 100%;
  margin: 0 0 0 12px;

  .navItem {
    width: 10px;
    height: 40px;
    cursor: pointer;
  }

  .navItem ~ .selected {
  }

  .selected {
    background: var(--textYellow);
  }
  .unselected {
    background: var(--textUnselected);
  }
`;
