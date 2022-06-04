import * as React from "react";
import { SVGProps } from "react";

const SvgCastle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M128 24c0-13.25 10.7-24 24-24h32c13.3 0 24 10.75 24 24v48h24V24c0-13.25 10.7-24 24-24h24c13.3 0 24 10.75 24 24v48h32V24c0-13.25 10.7-24 24-24h24c13.3 0 24 10.75 24 24v48h24V24c0-13.25 10.7-24 24-24h32c13.3 0 24 10.75 24 24v200h48v-40c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v256c0 39.8-32.2 72-72 72H72c-39.76 0-72-32.2-72-72V184c0-13.3 10.75-24 24-24h32c13.25 0 24 10.7 24 24v40h48V24zM72 240c-4.42 0-8-3.6-8-8v-48c0-4.4-3.58-8-8-8H24c-4.42 0-8 3.6-8 8v256c0 30.9 25.07 56 56 56h168V392c0-44.2 35.8-80 80-80s80 35.8 80 80v104h168c30.9 0 56-25.1 56-56V184c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v48c0 4.4-3.6 8-8 8H72zM496 24c0-4.42-3.6-8-8-8h-32c-4.4 0-8 3.58-8 8v56c0 4.42-3.6 8-8 8h-40c-4.4 0-8-3.58-8-8V24c0-4.42-3.6-8-8-8h-24c-4.4 0-8 3.58-8 8v56c0 4.42-3.6 8-8 8h-48c-4.4 0-8-3.58-8-8V24c0-4.42-3.6-8-8-8h-24c-4.4 0-8 3.58-8 8v56c0 4.42-3.6 8-8 8h-40c-4.4 0-8-3.58-8-8V24c0-4.42-3.6-8-8-8h-32c-4.4 0-8 3.58-8 8v200h352V24zM320 328c-35.3 0-64 28.7-64 64v104h128V392c0-35.3-28.7-64-64-64z" />
  </svg>
);

export default SvgCastle;