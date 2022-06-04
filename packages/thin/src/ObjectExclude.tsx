import * as React from "react";
import { SVGProps } from "react";

const SvgObjectExclude = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M16 64v224c0 26.5 21.49 48 48 48h64v16H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h224c35.3 0 64 28.65 64 64v64h-16V64c0-26.51-21.5-48-48-48H64c-26.51 0-48 21.49-48 48zm160 320v64c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V224c0-26.5-21.5-48-48-48h-64v-16h64c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-64h16zm80-32v-16h32c26.5 0 48-21.5 48-48h16c0 35.3-28.7 64-64 64h-32zm96-96h-16v-80h-48v-16h64v96zm-192 96v-96h16v80h48v16h-64zm64-192h32v16h-32c-26.5 0-48 21.5-48 48h-16c0-35.3 28.7-64 64-64z" />
  </svg>
);

export default SvgObjectExclude;
