import * as React from "react";
import { SVGProps } from "react";

const SvgLocationArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M47.1 256c-14.39 0-27.55-10.8-30.5-25.8-2.95-15 5.13-30 19.28-35.8L387.9 50.38c11.9-4.88 25.6-2.12 34.7 6.99 9.1 9.12 11.9 22.82 7 34.75l-144 351.98c-5.8 14.2-20.8 22.2-35.8 19.3-15-3-26.7-16.1-26.7-31.4V256h-176zM240 240v192c0 7.6 5.4 14.2 12.9 15.7s15-2.6 17.9-9.6l144-352.04c2.4-5.97 1.1-12.82-3.5-17.37-4.5-4.56-11.4-5.94-17.4-3.5L41.94 209.2c-7.08 2.9-11.12 10.4-9.64 17.9 1.48 7.5 8.05 12.9 14.8 12.9H240z" />
  </svg>
);

export default SvgLocationArrow;
