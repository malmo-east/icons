import * as React from "react";
import { SVGProps } from "react";

const SvgBeerMugEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M432 96h-48V64c0-17.67-14.33-32-32-32H64c-17.67 0-32 14.33-32 32v352c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64v-32.08l80.66-35.94C493.5 335.1 512 306.5 512 275v-99c0-44.2-35.8-80-80-80zM160 368c0 8.9-7.1 16-16 16s-16-7.1-16-16V144c0-8.9 7.1-16 16-16s16 7.1 16 16v224zm64 0c0 8.9-7.1 16-16 16s-16-7.1-16-16V144c0-8.9 7.1-16 16-16s16 7.1 16 16v224zm64 0c0 8.875-7.125 16-16 16s-16-7.1-16-16V144c0-8.9 7.1-16 16-16s16 7.1 16 16v224zm160-93c0 6.25-3.75 12-9.5 14.62L384 313.9V160h48c8.9 0 16 7.1 16 16v99z" />
  </svg>
);

export default SvgBeerMugEmpty;
