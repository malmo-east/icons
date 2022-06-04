import * as React from "react";
import { SVGProps } from "react";

const SvgElevator = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 128H64c-35.35 0-64 28.65-64 63.1v255.1C0 483.3 28.65 512 64 512h384c35.35 0 64-28.65 64-63.1V192c0-35.3-28.7-64-64-64zm48 320c0 26.47-21.53 47.1-48 47.1H64c-26.47 0-48-21.53-48-47.1V192c0-26.47 21.53-47.1 48-47.1h384c26.47 0 48 21.53 48 47.1v256zM160 320c30.95-.117 56-25.13 56-55.1s-25.1-56.8-56-56.9c-30.9.1-56 25.1-56 56s25.1 55.9 56 56zm0-96c22.06.115 40 18.05 40 40 0 21.97-17.97 39.92-39.94 39.1-22.96.8-40.06-18-40.06-39.1 0-21.9 17.9-39.9 40-40zm192 96c30.95-.117 56-25.13 56-55.1s-25.1-56.8-56-56.9c-30.95.115-56 25.13-56 55.1s25.1 56.8 56 56.9zm0-96c22.06.115 40 18.05 40 40 0 21.97-17.97 39.92-39.94 39.1-22.96.8-40.06-18-40.06-39.1 0-21.9 17.9-39.9 40-40zM77.94 93.37 144 19.96l66.06 73.4c1.54 1.76 3.74 2.65 5.94 2.65a7.962 7.962 0 0 0 5.344-2.047c3.281-2.969 3.562-8.015.594-11.31l-72-79.1c-3-3.344-8.875-3.344-11.88 0l-72 79.1c-2.97 3.297-2.688 8.344.594 11.31C69.97 96.93 75 96.68 77.94 93.37zm284.16 0c1.5 1.672 3.656 2.636 5.938 2.636s4.438-.964 5.938-2.636l72-79.1c2.969-3.297 2.688-8.344-.594-11.31-3.28-2.937-8.344-2.672-11.28.594L368 76.06l-66.06-73.4c-2.938-3.281-8-3.562-11.28-.594s-3.562 8.015-.594 11.31L362.1 93.37zM368 352h-32c-35.35 0-64 28.65-64 64v39.1c0 4.418 3.582 7.1 8 7.1s8-1.8 8-6.2v-39.1c0-26.51 21.49-47.1 47.1-47.1H368c26.51 0 48 21.49 48 48v39.1c0 4.418 3.582 7.1 8 7.1s8-3.582 8-7.1v-39.1c0-37.1-28.7-65.8-64-65.8zm-192 0h-32c-35.35 0-64 28.65-64 64v39.1c0 4.418 3.582 7.1 7.1 7.1s8.9-1.8 8.9-6.2v-39.1c0-26.51 21.49-47.1 47.1-47.1H176c26.51 0 48 21.49 48 48v39.1c0 4.418 3.582 7.1 8 7.1s8-3.582 8-7.1v-39.1c0-37.1-28.7-65.8-64-65.8z" />
  </svg>
);

export default SvgElevator;
