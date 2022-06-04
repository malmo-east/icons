import * as React from "react";
import { SVGProps } from "react";

const SvgRollerCoaster = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M136 48c-8.2 0-16.2.83-24 2.4V472c0 4.4-3.6 8-8 8-4.42 0-8-3.6-8-8V54.83C49.39 71.3 16 115.8 16 168v304c0 4.4-3.58 8-8 8-4.418 0-8-3.6-8-8V168C0 92.89 60.89 32 136 32h6.5c43.1 0 83.7 20.44 109.3 55.09L392.4 277.1c27.5 37.1 70.8 58.9 116.9 58.9h2.7c61.9 0 112-50.1 112-112 0-50.7-33.7-93.6-80-107.4V280c0 4.4-3.6 8-8 8s-8-3.6-8-8V113.1c-5.2-.7-10.6-1.1-16-1.1h-17.8c-15.9 0-31.5 2.9-46.2 8.5V248c0 4.4-3.6 8-8 8s-8-3.6-8-8V127.9c-1.6.8-3.1 1.7-4.6 2.6l-47.3 28.4c-3.8 2.2-8.7 1-11-2.8-2.2-3.8-1-8.7 2.8-11l47.2-28.3c22.7-13.6 48.6-21.7 75.1-21.7H512c70.7 0 128 58.2 128 128V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V286c-19.4 34.9-54.6 59.8-96 65v121c0 4.4-3.6 8-8 8s-8-3.6-8-8V352h-2.7c-33.8 0-66.4-10.6-93.3-29.7V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V309.4c-7.4-6.9-14.3-14.5-20.4-22.8L304 184.5V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V162.9l-49.1-66.29c-8.6-11.63-19.1-21.45-30.9-29.15V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V58.69c-15.4-6.95-32.2-11.59-49.5-11.59l-6.5.9z" />
  </svg>
);

export default SvgRollerCoaster;