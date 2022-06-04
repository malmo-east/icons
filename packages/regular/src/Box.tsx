import * as React from "react";
import { SVGProps } from "react";

const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M342.4 32c25.3 0 48.2 14.9 58.5 38.01l41.6 93.59c3.6 8.2 5.5 17 5.5 26V416c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V189.6c0-9 1.879-17.8 5.516-26L47.11 70.01C57.38 46.89 80.3 32 105.6 32h236.8zm0 48H248v80h140.4L357 89.5c-2.5-5.78-8.3-9.5-14.6-9.5zM400 208H48v208c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V208zM59.64 160H200V80h-94.4c-6.33 0-12.06 3.72-14.63 9.5L59.64 160z" />
  </svg>
);

export default SvgBox;