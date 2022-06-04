import * as React from "react";
import { SVGProps } from "react";

const SvgKitMedical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM96 432H64c-8.801 0-16-7.201-16-16V96c0-8.801 7.199-16 16-16h32v352zm336 0H144V80h288v352zm96-16c0 8.799-7.199 16-16 16h-32V80h32c8.801 0 16 7.199 16 16v320zM208 288h48v48c0 8.8 7.2 16 16 16h32c8.836 0 16-7.164 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16z" />
  </svg>
);

export default SvgKitMedical;