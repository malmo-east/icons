import * as React from "react";
import { SVGProps } from "react";

const SvgRefrigerator = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 0H64C28.65 0 0 28.65 0 64v416c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V64c0-35.35-28.7-64-64-64zm48 480c0 8.822-7.178 16-16 16H32c-8.822 0-16-7.178-16-16V192h272v184c0 4.406 3.594 8 8 8s8-3.594 8-8V192h64v288zm0-304h-64V72c0-4.42-3.6-8-8-8s-8 3.58-8 8v104H16V64c0-26.47 21.53-48 48-48h256c26.47 0 48 21.53 48 48v112z" />
  </svg>
);

export default SvgRefrigerator;
