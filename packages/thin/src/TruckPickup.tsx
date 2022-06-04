import * as React from "react";
import { SVGProps } from "react";

const SvgTruckPickup = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M514.2 192H552c30.9 0 56 25.1 56 56v120h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-72c0 53-43 96-96 96-53.9 0-96-43-96-96h-96c0 53-43 96-96 96-53.9 0-96-43-96-96H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h24V248c0-30.9 25.07-56 56-56h136V72c0-22.09 17.9-40 40-40h104.5c12.2 0 23.8 5.61 31.4 15.21L514.2 192zM240 192h253.8L387.3 57.13c-4.5-5.77-11.5-9.13-18.8-9.13H264c-13.3 0-24 10.75-24 24v120zM48 368h33.33c7.61-45.4 47.07-80 94.67-80s87.1 34.6 94.7 80h98.6c7.6-45.4 47.1-80 94.7-80s87.1 34.6 94.7 80H592V248c0-22.1-17.9-40-40-40H88c-22.09 0-40 17.9-40 40v120zm128-64c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm288 160c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z" />
  </svg>
);

export default SvgTruckPickup;