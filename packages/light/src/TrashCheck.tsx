import * as React from "react";
import { SVGProps } from "react";

const SvgTrashCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M203.3 363.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6l-128 128zM310.1 22.56 336.9 64H432c8.8 0 16 7.16 16 16s-7.2 16-16 16h-18.3l-25.5 356.6c-2.3 33.5-31.1 59.4-63.8 59.4H123.6c-33.59 0-61.45-25.9-63.85-59.4L34.29 96H16C7.164 96 0 88.84 0 80s7.164-16 16-16h95.1L137 22.56C145.8 8.526 161.2 0 177.7 0h92.6c16.5 0 31.9 8.526 39.8 22.56zM148.9 64h150.2l-15.3-24.48c-2.9-4.68-8-7.52-13.5-7.52h-92.6c-5.5 0-10.6 2.84-13.5 7.52L148.9 64zM91.67 450.3C92.87 467 106.8 480 123.6 480h200.8c16.8 0 30.7-13 31.9-29.7L381.6 96H66.37l25.3 354.3z" />
  </svg>
);

export default SvgTrashCheck;
