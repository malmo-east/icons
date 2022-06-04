import * as React from "react";
import { SVGProps } from "react";

const SvgRightToLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 424V88c0-13.25-10.7-24-24-24s-24 10.75-24 24v336c0 13.25 10.75 24 24 24s24-10.7 24-24zM342.6 278.3c6.3-6.3 9.4-14.5 9.4-22.7s-3.1-16.3-9.4-22.6L192.2 97.09C161.3 69.21 112 91.11 112 132.7v42.91H48c-26.51 0-48 21.49-48 48v64c0 26.51 21.49 48 48 48h64v43.29c0 41.63 49.37 63.52 80.23 35.58L342.6 278.3zM160 287.6H48v-64h112v-89.3l137.4 121.4L160 376.1v-88.5z" />
  </svg>
);

export default SvgRightToLine;