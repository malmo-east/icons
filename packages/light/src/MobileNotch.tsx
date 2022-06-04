import * as React from "react";
import { SVGProps } from "react";

const SvgMobileNotch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M288 0H96C60.65 0 32 28.65 32 64v384c0 35.35 28.65 64 64 64h192c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zM160 32h64v16h-64V32zm160 416c0 17.64-14.36 32-32 32H96c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h32v16c0 17.64 14.36 32 32 32h64c17.64 0 32-14.36 32-32V32h32c17.64 0 32 14.36 32 32v384zm-96-48h-64c-8.836 0-16 7.162-16 16 0 8.836 7.164 16 16 16h64c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16z" />
  </svg>
);

export default SvgMobileNotch;
