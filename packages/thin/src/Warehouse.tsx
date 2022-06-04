import * as React from "react";
import { SVGProps } from "react";

const SvgWarehouse = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M329.1 20.38c-5.8-2.39-12.4-2.39-18.2 0L40.82 131.2C25.8 137.3 16 151.1 16 168.2v334.9c0 5.3-3.58 8-8 8-4.418 0-8-2.7-8-8V168.2c0-22.7 13.73-43.2 34.74-51.8L304.8 5.579a40.09 40.09 0 0 1 30.4 0L605.3 116.4c21 8.6 34.7 29.1 34.7 51.8v334.9c0 5.3-3.6 8-8 8s-8-2.7-8-8V168.2c0-17.1-9.8-30.9-24.8-37L329.1 20.38zM536 511.1l-432.9.9c-3.52 0-8-3.6-8-8.9v-288c0-12.4 11.6-24 24-24H520c13.3 0 24 11.6 24 24v288c0 5.3-3.6 8-8 8zm-416.9-304c-3.5 0-8 4.5-8 8V288H528v-72.9c0-3.5-3.6-8-8-8H119.1zm-8 96.9v96H528v-96H111.1zM528 496v-80H111.1v80H528z" />
  </svg>
);

export default SvgWarehouse;
