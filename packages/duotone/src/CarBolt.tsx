import * as React from "react";
import { SVGProps } from "react";

const SvgCarBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="car-bolt_svg__fa-primary"
      d="M165.4 32h181.2c40.8 0 77.1 25.78 90.6 64.29l35.2 100.51c23.2 9.6 39.6 32.5 39.6 59.2v144H0V256c0-26.7 16.36-49.6 39.61-59.2L74.8 96.29C88.27 57.78 124.6 32 165.4 32zM96 320c17.7 0 32-14.3 32-32s-14.3-32-32-32c-17.67 0-32 14.3-32 32s14.33 32 32 32zm320-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-97.7-136.8c3.3-6.7 1.6-14.7-4-19.48-5.7-4.76-14-4.97-19.9-.52l-128 96c-5.5 4.1-7.8 11.3-5.6 17.9 1.3 6.5 8.3 10.9 15.2 10.9h54.1l-36.4 72.8c-3.3 6.7-1.6 14.7 4 19.5 5.7 4.7 14 5 19.9.5l128-96c5.5-4.1 7.8-11.3 5.6-17.9-2.2-6.5-8.3-10.9-15.2-10.9h-54.1l36.4-72.8z"
    />
    <path
      d="M96 448c0 17.7-14.33 32-32 32H32c-17.67 0-32-14.3-32-32v-48h96v48zm416 0c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-48h96v48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCarBolt;
