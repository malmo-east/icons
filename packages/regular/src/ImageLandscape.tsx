import * as React from "react";
import { SVGProps } from "react";

const SvgImageLandscape = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 64H64C28.65 64 0 92.65 0 128v256c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V128c0-35.35-28.7-64-64-64zm16 320c0 8.822-7.178 16-16 16h-26.8L352.9 201.5c-4-5.9-10.7-9.5-17.8-9.5-7.135 0-13.8 3.562-17.75 9.5L233.69 327l-29.79-40.9c-4-5.5-10.4-8.8-17.2-8.8s-13.3 3.3-17.3 8.8L86.37 400H64c-8.822 0-16-7.178-16-16V128c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16v256zM175.1 160c-17.67 0-32 14.33-32 32s14.33 32 32 32c17.68 0 32-14.33 32-32s-13.4-32-32-32z" />
  </svg>
);

export default SvgImageLandscape;