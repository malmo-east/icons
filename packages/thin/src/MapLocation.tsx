import * as React from "react";
import { SVGProps } from "react";

const SvgMapLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M408 120c0 54.6-73.1 151.9-105.2 191.1-7.7 10.5-21.9 10.5-29.6 0C241.1 271.9 168 174.6 168 120 168 53.73 221.7 0 288 0s120 53.73 120 120zM288 16c-57.4 0-104 46.56-104 104 0 10.5 3.6 24.5 10.7 41.2 6.9 16.4 16.6 34.2 27.5 51.9 20.9 35.3 47.6 69.1 63.5 88 1.2 2.5 3.4 2.5 4.6 0 15.9-18.9 41.7-52.7 63.5-88 10.9-17.7 20.6-35.5 27.5-51.9 7.1-16.7 10.7-30.7 10.7-41.2 0-57.44-46.6-104-104-104zm250.5 131.2-117.4 42.7c1.5-3.3 3-6.7 4.5-10.1 1.3-3.2 2.7-6.6 4-10l103.5-37.6c20.8-7.6 42.9 7.9 42.9 30.1v260.9c0 13.4-8.4 25.5-21.1 30.1l-160.2 58.2c-1.6.6-3.4.7-5.1.1l-205.4-63.2-141.26 51.4C22.07 507.4 0 491.9 0 469.7V208.8c0-13.4 8.418-25.5 21.06-30.1l116.24-42.2c.9 5.2 2 10.5 3.4 15.7L26.53 193.8c-6.32 2.3-10.53 8.3-10.53 15v260.9c0 11.1 11.03 18.9 21.47 15.1L176 434.4V295.1c0-3.5 3.6-8 8-8s8 4.5 8 8v139l192 59.1V295.1c0-3.5 3.6-8 8-8s8 4.5 8 8v197.5l149.5-54.4c6.3-2.3 10.5-8.3 10.5-15V162.3c0-11.1-11.9-18.9-21.5-15.1z" />
  </svg>
);

export default SvgMapLocation;
