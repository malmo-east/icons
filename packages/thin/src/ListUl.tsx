import * as React from "react";
import { SVGProps } from "react";

const SvgListUl = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 80c8.84 0 16 7.16 16 16 0 8.8-7.16 16-16 16s-16-7.2-16-16c0-8.84 7.16-16 16-16zm0 160c8.84 0 16 7.2 16 16s-7.16 16-16 16-16-7.2-16-16 7.16-16 16-16zm0 192c-8.84 0-16-7.2-16-16s7.16-16 16-16 16 7.2 16 16-7.16 16-16 16zM496 88c4.4 0 8 3.58 8 8 0 4.4-3.6 8-8 8H176c-4.4 0-8-3.6-8-8 0-4.42 3.6-8 8-8h320zm0 160c4.4 0 8 3.6 8 8s-3.6 8-8 8H176c-4.4 0-8-3.6-8-8s3.6-8 8-8h320zm0 160c4.4 0 8 3.6 8 8s-3.6 8-8 8H176c-4.4 0-8-3.6-8-8s3.6-8 8-8h320z" />
  </svg>
);

export default SvgListUl;
