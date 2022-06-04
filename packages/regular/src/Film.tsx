import * as React from "react";
import { SVGProps } from "react";

const SvgFilm = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM112 432H64c-8.822 0-16-7.178-16-16v-72h64v88zm0-136H48v-80h64v80zm0-128H48V96c0-8.822 7.178-16 16-16h48v88zm240 264H160V280h192v152zm0-200H160V80h192v152zm112 184c0 8.822-7.178 16-16 16h-48v-88h64v72zm0-120h-64v-80h64v80zm0-128h-64V80h48c8.822 0 16 7.178 16 16v72z" />
  </svg>
);

export default SvgFilm;
