import * as React from "react";
import { SVGProps } from "react";

const SvgMapLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="map-location_svg__fa-primary"
      d="M408 120c0 54.6-73.1 151.9-105.2 191.1-7.7 10.5-21.9 10.5-29.6 0C241.1 271.9 168 174.6 168 120 168 53.73 221.7 0 288 0s120 53.73 120 120z"
    />
    <path
      d="M416 503V200.4c3.5-6.9 6.7-13.7 9.6-20.5.5-1.3 1-2.5 1.5-3.8l116-46.4c15.8-6.3 32.9 5.3 32.9 22.3v270.8c0 9.8-6 18.6-15.1 22.3L416 503zM15.09 187.3l122.51-49c2.4 14.2 7.3 28.3 12.8 41.6 2.9 6.8 6.1 13.6 9.6 20.5v251.4L32.91 502.7C17.15 508.1 0 497.4 0 480.4V209.6c0-9.8 5.975-19.5 15.09-22.3zM384 504.3l-192.9-54.9V255c21.4 31.3 43.2 59.6 57.1 76.1 20.5 26.5 59.1 26.5 79.6 0 13.9-16.5 35.7-44.8 56.2-76.1v249.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMapLocation;
