import * as React from "react";
import { SVGProps } from "react";

const SvgObjectIntersect = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M96 48H64c-8.84 0-16 7.16-16 16v32H0V64C0 28.65 28.65 0 64 0h32v48zm32-48h96v48h-96V0zM0 128h48v96H0v-96zm352 32v128c0 35.3-28.7 64-64 64H160V224c0-35.3 28.7-64 64-64h128zm-128 48c-8.8 0-16 7.2-16 16v80h80c8.8 0 16-7.2 16-16v-80h-80zm-16 208v32c0 8.8 7.2 16 16 16h32v48h-32c-35.3 0-64-28.7-64-64v-32h48zM352 64v32h-48V64c0-8.84-7.2-16-16-16h-32V0h32c35.3 0 64 28.65 64 64zm64 96h32c35.3 0 64 28.7 64 64v32h-48v-32c0-8.8-7.2-16-16-16h-32v-48zM96 304v48H64c-35.35 0-64-28.7-64-64v-32h48v32c0 8.8 7.16 16 16 16h32zm288 160v48h-96v-48h96zm64 48h-32v-48h32c8.8 0 16-7.2 16-16v-32h48v32c0 35.3-28.7 64-64 64zm64-128h-48v-96h48v96z" />
  </svg>
);

export default SvgObjectIntersect;
