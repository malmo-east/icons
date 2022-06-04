import * as React from "react";
import { SVGProps } from "react";

const SvgPenCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="pen-circle_svg__fa-primary"
      d="M301.2 139.7c15.6-15.6 40.9-15.6 56.6 0l14.3 14.4c15.7 15.6 15.7 40.9 0 56.6l-21.4 21.4-70.9-71 21.4-21.4zm26.9 115L222.9 359.9c-4.1 4.1-9.3 7-14.9 8.4l-60.1 15.1c-5.5 1.3-11.2-.3-15.2-4.2-4-4-5.6-9.8-4.2-16.1l15-59.3c1.4-5.6 4.3-10.7 8.4-15.7l105.2-104.3 71 70.9z"
    />
    <path
      d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm357.8-116.3c-15.7-15.6-41-15.6-56.6 0l-21.4 21.4 70.9 71 21.4-21.4c15.7-15.7 15.7-41 0-56.6l-14.3-14.4zM143.5 303.8l-15 59.3c-1.4 6.3.2 12.1 4.2 16.1 4 3.9 9.7 5.5 15.2 4.2l60.1-15.1c5.6-1.4 10.8-4.3 14.9-8.4l105.2-105.2-71-70.9-105.2 104.3c-4.1 5-7 10.1-8.4 15.7z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPenCircle;