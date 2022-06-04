import * as React from "react";
import { SVGProps } from "react";

const SvgFarm = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M0 104C0 46.56 46.56 0 104 0c57.4 0 104 46.56 104 104v8c0 4.4-3.6 8-8 8s-8-3.6-8-8v-8c0-48.6-39.4-88-88-88s-88 39.4-88 88v72h128c4.4 0 8 3.6 8 8s-3.6 8-8 8H16v264c0 22.1 17.91 40 40 40h72c4.4 0 8 3.6 8 8s-3.6 8-8 8H56c-30.93 0-56-25.1-56-56V104zm400 88c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h64zm0 16h-64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm108.7-89.9c6 2.3 10.7 6.9 12.4 12.8l52 118.8c2.2 3.1 2.9 6.3 2.9 9.6V472c0 22.1-17.9 40-40 40H199.1c-21.2 0-40-17.9-40-40V259.3c0-3.3 1.6-6.5 2.9-9.6l52-118.8c2.6-5.9 7.3-10.5 13.3-12.8l132-51.3c5.6-2.18 11.8-2.18 17.4 0l132 51.3zM233.1 133c-2 .8-3.6 2.3-4.4 4.3l-52 118.8c-.5 1.1-.7 2.1-.7 3.2V472c0 13.3 10.7 24 24 24h88v-72c0-22.1 17.9-40 40-40h80c22.1 0 40 17.9 40 40v72h88c13.3 0 24-10.7 24-24V259.3c0-1.1-.2-2.1-.7-3.2l-52-118.8c-.8-2-2.4-3.5-4.4-4.3l-132-51.29c-1.9-.72-4.8-.72-5.8 0L233.1 133zM304 496h128v-72c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24v72z" />
  </svg>
);

export default SvgFarm;