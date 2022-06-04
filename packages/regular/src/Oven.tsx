import * as React from "react";
import { SVGProps } from "react";

const SvgOven = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M112 432h224c17.67 0 32-14.33 32-32V272c0-17.67-14.33-32-32-32H112c-17.67 0-32 14.33-32 32v128c0 17.7 14.33 32 32 32zm48-152h128c8.844 0 16 7.156 16 16s-7.156 16-16 16H160c-8.844 0-16-7.156-16-16s7.2-16 16-16zM104 80c-13.25 0-24 10.74-24 24 0 13.3 10.75 24 24 24s24-10.7 24-24c0-13.26-10.7-24-24-24zM352 0H96C42.98 0 0 42.98 0 96v352c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-53.02-43-96-96-96zm48 448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V208h352v240zm0-288H48V96c0-26.47 21.53-48 48-48h256c26.47 0 48 21.53 48 48v64zm-56-80c-13.3 0-24 10.74-24 24 0 13.3 10.7 24 24 24s24-10.75 24-24c0-13.26-10.7-24-24-24zm-160 0c-13.3 0-24 10.74-24 24 0 13.3 10.7 24 24 24s24-10.7 24-24c0-13.26-10.7-24-24-24zm80 0c-13.25 0-24 10.74-24 24 0 13.3 10.7 24 24 24s24-10.7 24-24c0-13.26-10.7-24-24-24z" />
  </svg>
);

export default SvgOven;