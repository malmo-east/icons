import * as React from "react";
import { SVGProps } from "react";

const SvgCarRear = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="car-rear_svg__fa-primary"
      d="M165.4 32h181.2c40.8 0 77.1 25.78 90.6 64.29l35.2 100.51c23.2 9.6 39.6 32.5 39.6 59.2v80c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64v-80c0-26.7 16.36-49.6 39.61-59.2L74.8 96.29C88.27 57.78 124.6 32 165.4 32zm0 64c-13.6 0-25.7 8.6-30.2 21.4L109.1 192h293.8l-26.1-74.6c-4.5-12.8-16.6-21.4-30.2-21.4H165.4zM208 272c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-96zM72 304h32c13.3 0 24-10.7 24-24s-10.7-24-24-24H72c-13.25 0-24 10.7-24 24s10.75 24 24 24zm336-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32z"
    />
    <path
      d="M135.2 117.4c4.5-12.8 16.6-21.4 30.2-21.4h181.2c13.6 0 25.7 8.6 30.2 21.4l26.1 74.6H109.1l26.1-74.6zM32 448v-56.6c9.41 5.5 20.34 8.6 32 8.6h64v48c0 17.7-14.3 32-32 32H64c-17.67 0-32-14.3-32-32zm352 0v-48h64c11.7 0 22.6-3.1 32-8.6V448c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCarRear;