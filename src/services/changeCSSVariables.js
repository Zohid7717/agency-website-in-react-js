import { element } from "prop-types";

export const changeCSSVariables = theme => {
  const root = document.querySelector(':root');
  const cssVariables = ['header', 'bgimage', 'inputStyle'];
  cssVariables.forEach(element => {
    root.style.setProperty(`--theme-default-${element}`, `var(--theme-${theme}-${element})` );
  })
}