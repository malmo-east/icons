import * as React from "react";
import { SVGProps } from "react";

const SvgFilm = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-64 32v176H128V64h256zM32 96c0-17.64 14.36-32 32-32h32v80H32V96zm0 80h64v64H32v-64zm0 96h64v64H32v-64zm32 176c-17.64 0-32-14.36-32-32v-48h64v80H64zm64 0V272h256v176H128zm352-32c0 17.64-14.36 32-32 32h-32v-80h64v48zm0-80h-64v-64h64v64zm0-96h-64v-64h64v64zm0-96h-64V64h32c17.64 0 32 14.36 32 32v48z" />
  </svg>
);

export default SvgFilm;