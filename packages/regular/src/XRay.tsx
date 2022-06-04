import * as React from "react";
import { SVGProps } from "react";

const SvgXRay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M128 192h112v32h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v32h-69.3c-25.56 0-40.8 28.48-26.62 49.75l21.33 32C171.3 378.7 181.3 384 192 384h127.1c10.7 0 20.69-5.348 26.63-14.25l21.33-32C382.1 316.5 366.9 288 341.3 288H272v-32h80c8.801 0 16-7.201 16-16 0-8.8-7.2-16-16-16h-80v-32h112c8.801 0 16-7.201 16-16 0-8.8-7.2-16-16-16H272v-32c0-8.801-7.199-16-16-16s-16 7.2-16 16v32H128c-8.8 0-16 7.2-16 16s7.2 16 16 16zm72 160c-8.836 0-16-7.164-16-16 0-8.838 7.164-16 16-16s16 7.162 16 16c0 8.8-7.2 16-16 16zm112-32c8.836 0 16 7.162 16 16 0 8.836-7.164 16-16 16s-16-7.164-16-16c0-8.8 7.2-16 16-16zm176 112h-8V80h8c13.3 0 24-10.75 24-24s-10.7-24-24-24H24C10.75 32 0 42.75 0 56s10.75 24 24 24h8v352h-8c-13.25 0-24 10.7-24 24s10.75 24 24 24h464c13.26 0 24-10.75 24-24s-10.7-24-24-24zm-56 0H80V80h352v352z" />
  </svg>
);

export default SvgXRay;