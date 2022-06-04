import * as React from "react";
import { SVGProps } from "react";

const SvgTruckTow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M96 64v96c0 26.5-21.49 48-48 48S0 186.5 0 160v-16c0-8.8 7.164-16 16-16 8.84 0 16 7.2 16 16v16c0 8.8 7.16 16 16 16s16-7.2 16-16V32c0-11.84 6.44-22.186 16-27.719A31.855 31.855 0 0 1 96 0h49.6c9.2 0 17.9 3.909 23.9 10.74L373.3 240H384v-88c0-30.9 25.1-56 56-56h50.1c20 0 40.7 9.1 54.4 24.8l81.8 94.5c8.8 10.1 13.7 23.2 13.7 36.6V360c0 30.9-25.1 56-56 56h-8c0 53-43 96-96 96-53.9 0-96-43-96-96H256c0 53-43 96-96 96-53.9 0-96-43-96-96h-8c-30.93 0-56-25.1-56-56v-64c0-30.9 25.07-56 56-56h128L96 64zm147.2 304h153.6c16.6-28.7 47.7-48 83.2-48s66.6 19.3 83.2 48H584c4.4 0 8-3.6 8-8v-72H56c-4.42 0-8 3.6-8 8v64c0 4.4 3.58 8 8 8h20.84c16.6-28.7 47.66-48 83.16-48s66.6 19.3 83.2 48zm-5.5-128h71.4L145.8 56.28 237.7 240zm270.5-87.7c-4.5-5.3-11.2-8.3-18.1-8.3H440c-4.4 0-8 3.6-8 8v88h152.2l-76-87.7zM160 368c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm320 96c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z" />
  </svg>
);

export default SvgTruckTow;
