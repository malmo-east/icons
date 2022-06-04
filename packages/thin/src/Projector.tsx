import * as React from "react";
import { SVGProps } from "react";

const SvgProjector = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M416 128c4.422 0 8-3.578 8-8V8c0-4.422-3.6-8-8-8s-8 3.578-8 8v112c0 4.4 3.6 8 8 8zm80.8 8a7.972 7.972 0 0 0 5.656-2.344l79.2-79.2c3.125-3.125 3.125-8.188 0-11.31s-8.188-3.125-11.31 0l-79.2 79.2a7.994 7.994 0 0 0 0 11.31A8.115 8.115 0 0 0 496.8 136zm-167.3-2.3c1.6 1.5 3.7 2.3 5.7 2.3s4.094-.781 5.656-2.344a7.994 7.994 0 0 0 0-11.31L261.7 43.14c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31l79.11 79.25zM96 304c-8.836 0-16 7.164-16 16s7.164 16 16 16c8.838 0 16-7.164 16-16s-7.2-16-16-16zm96 0c-8.836 0-16 7.164-16 16s7.164 16 16 16c8.838 0 16-7.164 16-16s-7.2-16-16-16zm376-112h-56c-.229 0-.36.223-.584.242C484.7 172.3 451.9 160 416 160s-68.71 12.26-95.42 32.24c-.18-.04-.38-.24-.58-.24H72c-39.7 0-72 32.3-72 72v112c0 37.07 28.26 67.33 64.32 71.22-.03.28-.32.48-.32.78v56c0 4.4 3.58 8 8 8s8-3.578 8-8v-56h240c.229 0 .36-.223.584-.242C347.3 467.7 380.1 480 416 480s68.71-12.26 95.42-32.24c.18.04.38.24.58.24h48v56c0 4.422 3.578 8 8 8s8-3.6 8-8v-56.81c35.9-4.039 64-34.23 64-71.19V264c0-39.7-32.3-72-72-72zM72 432c-30.88 0-56-25.12-56-56V264c0-30.88 25.12-56 56-56h229.9c-28.3 28.9-45.9 68.3-45.9 112s17.58 83.13 45.93 112H72zm344 32c-79.4 0-144-64.6-144-144s64.6-144 144-144 144 64.6 144 144-64.6 144-144 144zm208-88c0 30.88-25.12 56-56 56h-37.93C558.4 403.1 576 363.7 576 320s-17.58-83.13-45.93-112H568c30.88 0 56 25.12 56 56v112z" />
  </svg>
);

export default SvgProjector;
