import * as React from "react";
import { SVGProps } from "react";

const SvgCarCircleBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="car-circle-bolt_svg__fa-primary"
      d="M640 368c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-93.5-66.2c2.7-4.9 1.7-11.1-2.6-15.7-4.3-2.9-10.6-3.1-15.1.3l-96 72c-4.1 3.1-6.7 8.5-4.2 13.4 1.6 4.9 6.2 8.2 11.4 8.2h35.6l-30.1 54.2c-2.7 4.9-1.7 11.1 2.6 14.8 4.3 3.8 10.6 3.1 15.1.6l96-72c4.1-3.1 5.8-8.5 4.2-13.4-1.6-4.9-6.2-8.2-11.4-8.2h-35.6l30.1-54.2z"
    />
    <path
      d="M165.4 32h181.2c40.8 0 77.1 25.78 90.6 64.29l34.1 97.41C385.8 205.7 320 279.2 320 368c0 10.9.1 21.6 2.9 32H96v48c0 17.7-14.33 32-32 32H32c-17.67 0-32-14.3-32-32V256c0-26.7 16.36-49.6 39.61-59.2L74.8 96.29C88.27 57.78 124.6 32 165.4 32zm0 64c-13.6 0-25.7 8.6-30.2 21.4L109.1 192h293.8l-26.1-74.6c-4.5-12.8-16.6-21.4-30.2-21.4H165.4zM96 320c17.7 0 32-14.3 32-32s-14.3-32-32-32c-17.67 0-32 14.3-32 32s14.33 32 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCarCircleBolt;
