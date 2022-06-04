import * as React from "react";
import { SVGProps } from "react";

const SvgVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M557.6 102.3c-11.53-7.406-25.88-8.391-38.28-2.688L416 147v-19c0-35.35-28.65-64-64-64H64C28.65 64 0 92.65 0 128v256c0 35.35 28.65 64 64 64h288c35.35 0 64-28.65 64-64v-19.02l103.3 47.36a39.972 39.972 0 0 0 16.69 3.672c7.531 0 15.02-2.141 21.59-6.359C569.1 402.3 576 389.7 576 375.1V136c0-13.7-6.9-26.2-18.4-33.7zM368 384c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V128c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v256zm160-20.5-112-51.3V199.8l112-51.33V363.5z" />
  </svg>
);

export default SvgVideo;
