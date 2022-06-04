import * as React from "react";
import { SVGProps } from "react";

const SvgFlagPennant = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496.3 185.5 47.19 20.01C45.23 8.734 35.84 0 24 0 10.75 0 0 10.74 0 24v464c0 13.3 10.75 24 24 24s24-10.75 24-24v-92.3l448.3-165.2c9.4-3.5 15.7-12.4 15.7-22.5s-6.3-19.9-15.7-22.5zM48 344.5V71.48L418.6 208 48 344.5z" />
  </svg>
);

export default SvgFlagPennant;