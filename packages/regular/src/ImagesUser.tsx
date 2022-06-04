import * as React from "react";
import { SVGProps } from "react";

const SvgImagesUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 32H160c-35.3 0-64 28.65-64 64v224c0 35.35 28.65 64 64 64h352c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm16 288c0 8.822-7.178 16-16 16h-65.61c-7.414-36.52-39.68-64-78.39-64h-64c-38.7 0-70.97 27.48-78.39 64H160c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h352c8.822 0 16 7.178 16 16v224zM336 112c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.7-64-64-64zm120 368H120C53.83 480 0 426.2 0 360V120c0-13.2 10.75-24 24-24s24 10.8 24 24v240c0 39.7 32.3 72 72 72h336c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
  </svg>
);

export default SvgImagesUser;
