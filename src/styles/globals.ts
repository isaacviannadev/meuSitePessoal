import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root{
   --bgDark: #2E3041;
   --bgDarkSecondary: #242734;
   --textWhite: #EAEBEE;
   --textYellow: #fec05b;
   --bgYellow: #eac400;
   --textUnselected: #666876;
   --textSecondary: #989BA5;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html,
body {
  overflow-x: hidden;
  font-family: "Ubuntu", sans-serif;

  background-color: var(--bgDark);
  color: var(--textWhite);

   ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #314957;
    transition: background 0.2s ease-in-out;
  }
  ::-webkit-scrollbar-thumb:hover {
    
    background: #bea4fb;
  }

}

main {
  height: calc(100vh - 30px );
  width: 100vw;
}

input,
button {
  font-size: 16px;
}

button,
a {
  cursor: pointer;
  z-index: 1;
}

a {
  text-decoration: none;
  color: inherit;
}

ol,
ul {
  list-style: none;
}

svg {
  display: inline;
  vertical-align: middle;
}

img,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Turret Road', cursive;
}

`;
