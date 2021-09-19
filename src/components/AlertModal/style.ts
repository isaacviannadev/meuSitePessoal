import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  overflow: hidden;

  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 20px;

    background-color: #fff;
    width: 400px;
    height: 300px;
    border-radius: 20px;
    z-index: 2;
    text-align: center;

    svg {
      height: 60px;
      width: 60px;
      color: #c23233;
    }

    p {
      color: var(--bgDark);

      font-size: 24px;
    }

    button {
      background-color: var(--textYellow);
      padding: 4px 8px;
      width: fit-content;
      height: 40px;
      border: none;
      border-radius: 6px;
      font-weight: bold;
      color: var(--bgDark);
    }
  }

  .backdrop {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
