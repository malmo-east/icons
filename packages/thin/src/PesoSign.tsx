import * as React from "react";
import { SVGProps } from "react";

const SvgPesoSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M48 63.31C48 46.02 62.02 32 79.31 32H184c70.1 0 129.1 47.46 146.7 112H376c4.4 0 8 3.6 8 8s-3.6 8-8 8h-41.9c1.3 7.8 1.9 15.8 1.9 24 0 13.8-1.8 27.3-5.3 40H376c4.4 0 8 3.6 8 8s-3.6 8-8 8h-50.6c-22.3 56.2-77.2 96-141.4 96H64v136c0 4.4-3.58 8-8 8s-8-3.6-8-8V240H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h40v-64H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h40V63.31zM64 240v80h120c55.1 0 102.6-32.8 123.1-80H64zm256-56c0-8.2-.7-16.2-2.1-24H64v64h250c3.9-12.6 6-26.1 6-40zM79.31 48C70.86 48 64 54.86 64 63.31V144h250c-17.1-55.59-68.8-96-130-96H79.31z" />
  </svg>
);

export default SvgPesoSign;
