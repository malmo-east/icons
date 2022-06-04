import * as React from "react";
import { SVGProps } from "react";

const SvgVialCircleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 64c0-17.67 14.33-32 32-32h192c17.7 0 32 14.33 32 32s-14.3 32-32 32v170.8c-20.2 28.6-32 63.5-32 101.2 0 25.2 5.3 49.1 14.8 70.8-17.3 24.9-46.2 41.2-78.8 41.2-53.02 0-96-43-96-96V96C14.33 96 0 81.67 0 64zm96 128h64V96H96v96zm416 176c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-99.3-43.3L352 385.4l-28.7-28.7c-6.2-6.3-16.4-6.3-22.6 0-6.3 6.2-6.3 16.4 0 22.6l40 40c6.2 6.3 16.4 6.3 22.6 0l72-72c6.3-6.2 6.3-16.4 0-22.6-6.2-6.3-16.4-6.3-22.6 0z" />
  </svg>
);

export default SvgVialCircleCheck;
