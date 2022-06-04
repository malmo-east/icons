import * as React from "react";
import { SVGProps } from "react";

const SvgBlockBrick = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm128 32h192V48H128v80zm-16 0V48H64c-26.51 0-48 21.49-48 48v32h96zm-96 16v104h200V144H16zm96 224V264H16v104h96zm-96 16v32c0 26.5 21.49 48 48 48h152v-80H16zm112-16h192V264H128v104zm304 0V264h-96v104h96zm0 16H232v80h152c26.5 0 48-21.5 48-48v-32zM232 144v104h200V144H232zm200-16V96c0-26.51-21.5-48-48-48h-48v80h96z" />
  </svg>
);

export default SvgBlockBrick;
