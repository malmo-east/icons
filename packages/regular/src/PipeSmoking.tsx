import * as React from "react";
import { SVGProps } from "react";

const SvgPipeSmoking = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M616 0h-40.04c-41.69 0-79.71 14.56-101.3 38.75l-135.8 156c-15.43-4.338-32.17.756-41.14 14.03L272 243.2V232c0-30.88-25.12-56-56-56H56c-30.88 0-56 25.1-56 56v140.9C0 449.6 62.41 512 139.1 512h23.47c57.38 0 110.2-28.81 140.7-76.34l105.8-151.7c6.031-8.594 8.281-19.41 6.219-29.66-.734-3.588-2.566-6.738-4.258-9.934l102.2-159.1C526 61.94 550 48 575.8 48H616c13.3 0 24-10.75 24-24S629.3 0 616 0zM263.4 408.1c-22.2 35.3-59.9 55.9-100.8 55.9h-23.5C88.88 464 48 423.1 48 372.9V232c0-4.4 3.59-8 8-8h160c4.4 0 8 3.6 8 8v83.38c0 10.34 6.625 19.5 16.44 22.78 9.75 3.188 20.59-.094 26.78-8.406l63.97-85.63 32.75 20.62L263.4 408.1z" />
  </svg>
);

export default SvgPipeSmoking;