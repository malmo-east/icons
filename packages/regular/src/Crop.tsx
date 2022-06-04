import * as React from "react";
import { SVGProps } from "react";

const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M80 24c0-13.25 10.75-24 24-24 13.3 0 24 10.75 24 24v326.1L350.1 128H160V80h238.1L471 7.029c9.4-9.372 24.6-9.372 33.1 0 10.2 9.371 10.2 24.571 0 33.941L432 113.9V384h56c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V161.9L161.9 384H352v48H136c-30.9 0-56-25.1-56-56V128H24c-13.25 0-24-10.7-24-24 0-13.25 10.75-24 24-24h56V24z" />
  </svg>
);

export default SvgCrop;