import * as React from "react";
import { SVGProps } from "react";

const SvgPersonShelter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M504.2 146.3c4.8 2.9 7.8 8.1 7.8 13.7v336c0 8.8-7.2 16-16 16s-16-7.2-16-16V169.1L256 34.66 32 169.1V496c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V160c0-5.6 2.949-10.8 7.768-13.7L247.8 2.28c5-3.04 11.4-3.04 16.4 0l240 144.02zM304 168c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm-48-16c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-24 248v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V291.5l-42.4 68.9c-5.5 7.5-14.5 9.9-22 5.2-7.5-5.5-9.9-14.5-5.2-22l45.2-73.5c14.6-23.7 39.5-38.1 68.2-38.1h24.4c27.8 0 53.6 14.4 68.2 38.1l45.2 73.5c4.7 7.5 2.3 16.5-5.2 22-7.5 4.7-17.4 2.3-22-5.2L312 291.5V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96h-48zm0-32h48V265.5c-3.8-1-7.7-1.5-11.8-1.5h-24.4c-4.1 0-8 .5-11.8 1.5V368z" />
  </svg>
);

export default SvgPersonShelter;
