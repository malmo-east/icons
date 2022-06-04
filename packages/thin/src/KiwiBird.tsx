import * as React from "react";
import { SVGProps } from "react";

const SvgKiwiBird = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M432 224c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zM192 32c40.7 0 78.4 12.64 109.4 34.21 33.9 23.51 71 45.79 112.2 45.79H464c61.9 0 112 50.1 112 112 0 2.7-.1 5.4-.3 8h.3v240c0 3.6-2.5 6.8-6 7.7-3.5 1-7.2-.6-9-3.8l-78.5-141.4c-6.1 1-12.2 1.5-18.5 1.5h-50.4c-41.2 0-78.3 22.3-112.2 45.8-18.4 12.8-39.1 22.4-61.4 27.3V472c0 4.4-3.6 8-8 8s-8-3.6-8-8v-58.7c-10.4 1.8-21.1 2.7-32 2.7-22.4 0-44-3.8-64-10.9V472c0 4.4-3.6 8-8 8s-8-3.6-8-8v-73.4C45.9 368.3 0 301.5 0 224 0 117.1 85.96 32 192 32zm0 368c37.3 0 71.8-11.6 100.3-31.4 33.8-23.4 74.6-48.6 121.3-48.6H464c53 0 96-43 96-96 0-53.9-43-96-96-96h-50.4c-46.7 0-87.5-25.2-121.3-48.65C263.8 59.59 229.3 48 192 48 94.8 48 16 126.8 16 224c0 68.4 39.01 127.7 96 156.8V328c0-4.4 3.6-8 8-8s8 3.6 8 8v60c19.8 7.7 41.4 12 64 12zm368-118.3c-13.8 22.9-35.5 40.5-61.4 48.9L560 441.1V281.7z" />
  </svg>
);

export default SvgKiwiBird;
