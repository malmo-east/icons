import * as React from "react";
import { SVGProps } from "react";

const SvgFlatbread = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zM112 248a7.959 7.959 0 0 1-5.656-2.344C103.8 243.1 103.3 239 105.1 235.9c32.56-54.23 76.53-98.22 130.8-130.8 3.156-1.891 7.188-1.422 9.781 1.203 2.619 2.597 3.119 5.797 1.219 9.797-32.6 54.2-76.6 98.2-130.8 130.8-1.3.7-2.7 1.1-4.1 1.1zm52.7 110.5c-1.4 1-3.1 1.5-4.7 1.5a8.012 8.012 0 0 1-5.656-2.344c-2.781-2.766-3.125-7.125-.844-10.31 53.59-75.03 118.8-140.3 193.8-193.9 3.156-2.297 7.531-1.922 10.31.86 2.781 2.765 3.125 7.124.844 10.31C304.9 239.7 239.7 304.9 164.7 358.5zm242.2-82.4c-32.56 54.23-76.53 98.22-130.8 130.8-1.3.7-2.7 1.1-4.1 1.1a7.959 7.959 0 0 1-5.656-2.344 8.015 8.015 0 0 1-1.219-9.766c32.56-54.23 76.53-98.22 130.8-130.8 3.156-1.875 7.219-1.375 9.781 1.203 2.594 2.607 3.094 5.807 1.194 9.807z" />
  </svg>
);

export default SvgFlatbread;