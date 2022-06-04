import * as React from "react";
import { SVGProps } from "react";

const SvgObjectExclude = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M48 64v224c0 8.8 7.16 16 16 16h64v48H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h224c35.3 0 64 28.65 64 64v64h-48V64c0-8.84-7.2-16-16-16H64c-8.84 0-16 7.16-16 16zm160 320v64c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16h-64v-48h64c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-64h48zm48-32v-48h32c8.8 0 16-7.2 16-16h48c0 35.3-28.7 64-64 64h-32zm96-96h-48v-48h-16v-48h64v96zm-192 96v-96h48v48h16v48h-64zm64-192h32v48h-32c-8.8 0-16 7.2-16 16h-48c0-35.3 28.7-64 64-64z" />
  </svg>
);

export default SvgObjectExclude;