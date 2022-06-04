import * as React from "react";
import { SVGProps } from "react";

const SvgObjectSubtract = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M128 16V0h96v16h-96zm-64 0c-26.51 0-48 21.49-48 48v32H0V64C0 28.65 28.65 0 64 0h32v16H64zM0 224v-96h16v96H0zm16 32v32c0 26.5 21.49 48 48 48h32v16H64c-35.35 0-64-28.7-64-64v-32h16zm208 80v16h-96v-16h96zm-48 112c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V224c0-26.5-21.5-48-48-48h-64v-16h64c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-64h16v64zM352 64v32h-16V64c0-26.51-21.5-48-48-48h-32V0h32c35.3 0 64 28.65 64 64zm0 160h-16v-96h16v96zm-96 112h32c26.5 0 48-21.5 48-48v-32h16v32c0 35.3-28.7 64-64 64h-32v-16z" />
  </svg>
);

export default SvgObjectSubtract;
