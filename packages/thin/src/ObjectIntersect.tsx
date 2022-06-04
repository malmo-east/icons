import * as React from "react";
import { SVGProps } from "react";

const SvgObjectIntersect = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M224 0v16h-96V0h96zM96 0v16H64c-26.51 0-48 21.49-48 48v32H0V64C0 28.65 28.65 0 64 0h32zM16 128v96H0v-96h16zM256 16V0h32c35.3 0 64 28.65 64 64v64h-16V64c0-26.51-21.5-48-48-48h-32zm96 144v128c0 35.3-28.7 64-64 64H160V224c0-35.3 28.7-64 64-64h128zm-128 16c-26.5 0-48 21.5-48 48v112h112c26.5 0 48-21.5 48-48V176H224zm-48 208v64c0 26.5 21.5 48 48 48h32v16h-32c-35.3 0-64-28.7-64-64v-64h16zM64 352c-35.35 0-64-28.7-64-64v-32h16v32c0 26.5 21.49 48 48 48h64v16H64zm320-192h64c35.3 0 64 28.7 64 64v32h-16v-32c0-26.5-21.5-48-48-48h-64v-16zm32 336h32c26.5 0 48-21.5 48-48v-32h16v32c0 35.3-28.7 64-64 64h-32v-16zm80-208h16v96h-16v-96zM288 512v-16h96v16h-96z" />
  </svg>
);

export default SvgObjectIntersect;
