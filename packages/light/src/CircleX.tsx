import * as React from "react";
import { SVGProps } from "react";

const SvgCircleX = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm106.4-348.2c-6.688-5.75-16.8-4.938-22.55 1.75L256 231.4l-83.86-97.84c-5.74-6.66-15.84-7.36-22.54-1.76-6.719 5.75-7.5 15.88-1.734 22.56L234.9 256l-87.08 101.6c-5.766 6.688-4.984 16.81 1.734 22.56C152.6 382.8 156.3 384 160 384c4.5 0 8.984-1.906 12.14-5.594L256 280.6l83.86 97.84C343 382.1 347.5 384 352 384c3.688 0 7.391-1.281 10.41-3.844 6.719-5.75 7.5-15.88 1.734-22.56L277.1 256l87.08-101.6c5.72-6.7 4.92-16.8-1.78-22.6z" />
  </svg>
);

export default SvgCircleX;
