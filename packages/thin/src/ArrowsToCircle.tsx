import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsToCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M175.1 164.7V72c0-4.42 4.5-8 8-8 5.3 0 8 3.58 8 8v112c0 4.4-2.7 8-8 8h-112c-3.52 0-8-3.6-8-8s4.48-8 8-8h93.6L2.343 13.66a8.004 8.004 0 0 1 0-11.317c3.124-3.124 8.187-3.124 11.317 0L175.1 164.7zM626.3 2.343a8.105 8.105 0 0 1 11.4 0c3.1 3.124 3.1 8.187 0 11.317L475.3 175.1H568c4.4 0 8 4.5 8 8 0 5.3-3.6 8-8 8H456c-4.4 0-8-2.7-8-8v-112c0-3.52 3.6-8 8-8s8 4.48 8 8v93.6L626.3 2.343zM223.1 256c0-53.9 43-96 96-96 53.9 0 96.9 42.1 96.9 96 0 53-43 96-96.9 96-53 0-96-43-96-96zm96 80c45.1 0 80.9-35.8 80.9-80s-35.8-80-80.9-80c-43.3 0-80 35.8-80 80s36.7 80 80 80zM456 448c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8s-3.6 8-8 8h-92.7l162.4 162.3c3.1 3.2 3.1 8.2 0 11.4a8.15 8.15 0 0 1-11.4 0L464 347.3V440c0 4.4-3.6 8-8 8zm-280.9-8v-92.7L13.66 509.7c-3.13 3.1-8.193 3.1-11.317 0a8.105 8.105 0 0 1 0-11.4L164.7 336H71.1c-3.52 0-8-3.6-8-8s4.48-8 8-8h112c5.3 0 8 3.6 8 8v112c0 4.4-2.7 8-8 8-3.5 0-8-3.6-8-8z" />
  </svg>
);

export default SvgArrowsToCircle;