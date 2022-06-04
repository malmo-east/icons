import * as React from "react";
import { SVGProps } from "react";

const SvgObjectSubtract = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M48 64v32H0V64C0 28.65 28.65 0 64 0h32v48H64c-8.84 0-16 7.16-16 16zm176-16h-96V0h96v48zM48 224H0v-96h48v96zm0 32v32c0 8.8 7.16 16 16 16h32v48H64c-35.35 0-64-28.7-64-64v-32h48zm80 96v-48h96v48h-96zm80 32v64c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16h-64v-48h64c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-64h48zm144-160h-48v-96h48v96zm0-160v32h-48V64c0-8.84-7.2-16-16-16h-32V0h32c35.3 0 64 28.65 64 64zm-96 240h32c8.8 0 16-7.2 16-16v-32h48v32c0 35.3-28.7 64-64 64h-32v-48z" />
  </svg>
);

export default SvgObjectSubtract;