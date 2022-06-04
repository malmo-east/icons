import * as React from "react";
import { SVGProps } from "react";

const SvgCampground = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="m328.1 112 235.6 293.4c8 10 12.3 22.3 12.3 35V464c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-23.6c0-12.7 4.328-25 12.27-35L247 112l-48-60.01c-11.9-13.8-8.8-33.94 5-44.977 13.8-11.04 33.9-8.802 44.1 4.997L288 60.78l39-48.77c11.1-13.799 31.2-16.037 44.1-4.997 14.7 11.037 16.9 31.177 5 44.977l-48 60.01zm79.4 336L288 291.7 168.5 448h239z" />
  </svg>
);

export default SvgCampground;
