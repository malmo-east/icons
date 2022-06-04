import * as React from "react";
import { SVGProps } from "react";

const SvgMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M232.4 23.75c27.9-18.448 65.9-15.384 90.5 9.19L336 46.06l15-15.03c35.9-35.865 94.1-35.874 129.1 0 36.8 35.89 36.8 94.07 0 129.07L229.5 412.5c-48 48-109.2 80.7-175.8 94l-24.99 5c-7.87 1.6-16.01-.9-21.68-7.4-5.674-4.8-8.137-12.9-6.564-20.8l4.999-25C18.78 391.7 51.52 330.5 99.54 282.5L302.1 80l-14-13.09c-8.5-9.35-23.7-9.36-33.1 0l-86.9 85.19c-3.2 5-8.5 7.3-13.8 7.8-6.9.6-14-1.7-19.3-7.8-9.3-8.5-9.3-23.7 0-33.1l86.1-86.03c3.5-3.51 7.3-6.59 11.3-9.22zM225.9 224l62.1 62.1L447 127c17.2-17.1 17.2-44.89 0-62.02-17.1-17.14-44.9-17.14-62.9 0L225.9 224zM192 257.9l-58.5 58.6c-38.79 38.7-65.98 86.6-78.65 140.7C108 444.5 156.8 417.3 195.5 378.5l58.6-58.5-62.1-62.1z" />
  </svg>
);

export default SvgMarker;