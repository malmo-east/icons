import * as React from "react";
import { SVGProps } from "react";

const SvgTeeth = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M480 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h384c53.02 0 96-42.98 96-96V128c0-53.02-43-96-96-96zM144 336c0 26.5-21.5 48-48 48s-48-21.5-48-48v-32c0-8.9 7.13-16 16-16h64c8.875 0 16 7.125 16 16v32zm0-96c0 8.9-7.1 16-16 16H64c-8.87 0-16-7.1-16-16v-32c0-26.5 21.5-48 48-48s48 21.5 48 48v32zm128 96c0 26.5-21.5 48-48 48s-48-21.5-48-48v-32c0-8.9 7.1-16 16-16h64c8.875 0 16 7.125 16 16v32zm0-93.7c0 7.6-6.1 13.7-13.7 13.7h-68.6c-7.6 0-13.7-6.1-13.7-13.7V176c0-26.5 21.5-48 48-48s48 21.54 48 48v66.3zM400 336c0 26.5-21.5 48-48 48s-48-21.5-48-48v-32c0-8.9 7.1-16 16-16h64c8.875 0 16 7.125 16 16v32zm0-93.7c0 7.6-6.1 13.7-13.7 13.7h-68.57c-7.63 0-13.73-6.1-13.73-13.7V176c0-26.5 21.5-48 48-48s48 21.54 48 48v66.3zM528 336c0 26.5-21.5 48-48 48s-48-21.5-48-48v-32c0-8.9 7.1-16 16-16h64c8.875 0 16 7.125 16 16v32zm0-96c0 8.9-7.1 16-16 16h-64c-8.875 0-16-7.125-16-16v-32c0-26.5 21.5-48 48-48s48 21.5 48 48v32z" />
  </svg>
);

export default SvgTeeth;
