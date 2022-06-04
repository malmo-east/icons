import * as React from "react";
import { SVGProps } from "react";

const SvgDownFromLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M314.4 272H256V156.8c0-24.7-20.1-44.8-44.8-44.8h-38.4c-24.7 0-44.8 20.1-44.8 44.8V272H69.59c-15 0-28.53 8.906-34.53 22.75-5.938 13.8-3.125 29.78 7.062 40.55l122.5 133.2C171.5 475.8 181.5 480 192 480s20.47-4.188 27.5-11.66l122.2-132.9c10.34-10.92 13.16-26.91 7.219-40.77C342.9 280.9 329.4 272 314.4 272zm3.9 41.6L196.1 446.5c-1.75 1.812-6.594 1.656-8.031.156L65.53 313.5c-1.53-1.7-1.97-4-1.09-6.1.9-2.1 2.94-3.4 5.15-3.4H160V156.8c0-7 5.8-12.8 12.8-12.8h38.38c7.12 0 12.82 5.8 12.82 12.8V304h90.41c2.219 0 4.25 1.344 5.156 3.375.834 2.125.434 4.425-1.266 6.225zM368 32H16C7.156 32 0 39.16 0 48s7.156 16 16 16h352c8.8 0 16-7.16 16-16s-7.2-16-16-16z" />
  </svg>
);

export default SvgDownFromLine;
