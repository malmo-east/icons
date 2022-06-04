import * as React from "react";
import { SVGProps } from "react";

const SvgVentDamper = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M496 112H144c-17.66 0-32 14.34-32 32v224c0 17.66 14.34 32 32 32h352c17.66 0 32-14.34 32-32V144c0-17.7-14.3-32-32-32zm16 256c0 8.832-7.168 16-16 16H144c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v224zm-64-48H192c-4.416 0-8 3.584-8 8s3.6 8 8 8h256c4.416 0 8-3.584 8-8s-3.6-8-8-8zm144-192h-16c0-35.36-28.64-64-64-64H128c-35.36 0-64 28.64-64 64H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h16c0 35.36 28.64 64 64 64h384c35.36 0 64-28.64 64-64h16c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zM64 368H48c-17.66 0-32-14.34-32-32V176c0-17.66 14.34-32 32-32h16v224zm496 16c0 26.5-21.5 48-48 48H128c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48v256zm64-48c0 17.66-14.34 32-32 32h-16V144h16c17.66 0 32 14.34 32 32v160zm-176-88H192c-4.4 0-8 3.6-8 8s3.6 8 8 8h256c4.416 0 8-3.584 8-8s-3.6-8-8-8zm0-72H192c-4.416 0-8 3.584-8 8s3.6 8 8 8h256c4.416 0 8-3.584 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgVentDamper;
