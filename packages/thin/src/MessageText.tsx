import * as React from "react";
import { SVGProps } from "react";

const SvgMessageText = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 7.072 5.92 12.02 12.18 12.02 2.369 0 4.785-.744 6.947-2.322L304 415.1h144c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zm48 351.1c0 26.46-21.53 47.1-48 47.1H298.7L176 492.1v-92.09H64c-26.47 0-48-21.53-48-47.1V63.99c0-26.46 21.53-47.1 48-47.1h384c26.47 0 48 21.53 48 47.1V351.1zm-152-208H168c-4.406 0-8 3.594-8 8s3.594 8.002 8 8.002l80-.002v136c0 4.406 3.594 8 8 8s8-3.594 8-8v-136l80 .002c4.406 0 8-3.595 8-8.002s-3.6-8-8-8z" />
  </svg>
);

export default SvgMessageText;