import * as React from "react";
import { SVGProps } from "react";

const SvgPalletBoxes = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M160 288h144c15.22 0 29.02-5.535 40-14.41 10.1 8.91 24.8 14.41 40 14.41h96c35.35 0 64-28.65 64-64v-96c0-35.35-28.65-64-64-64h-96c-5.559 0-10.86.932-16 2.264V64c0-35.35-28.65-64-64-64H160c-35.3 0-64 28.65-64 64v160c0 35.3 28.7 64 64 64zm208-160c0-8.822 7.178-16 16-16h96c8.822 0 16 7.178 16 16v96c0 8.822-7.178 16-16 16h-96c-8.822 0-16-7.178-16-16v-96zM144 64c0-8.822 7.178-16 16-16h144c8.8 0 16 7.18 16 16v160c0 8.822-7.178 16-16 16H160c-8.8 0-16-7.2-16-16V64zm472 400h-48v-96h48c13.25 0 24-10.75 24-24s-10.7-24-24-24H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h48v96H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h592c13.25 0 24-10.75 24-24s-10.7-24-24-24zm-320 0H120v-96h176v96zm224 0H344v-96h176v96z" />
  </svg>
);

export default SvgPalletBoxes;