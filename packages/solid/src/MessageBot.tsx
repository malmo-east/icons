import * as React from "react";
import { SVGProps } from "react";

const SvgMessageBot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M608 159.1c-18.85 0-25.44 13.31-27.03 16H544V80c0-44.18-35.8-80-80-80H176c-44.2 0-80 35.82-80 80v95.1H59.03c-1.59-1.8-8.18-16-27.03-16-17.06 0-32 13.72-32 32 0 18.3 14.97 31.1 32 31.1 18.85 0 25.44-13.3 27.03-15.1H96v127.1c0 44.18 35.82 80 80 80l48 .9v83.99c0 4.21 2.7 12.91 12 12.91 2.521 0 4.998-.809 7.096-2.328L368 415.1l96 .006c44.18 0 80-35.82 80-80V207.1h36.98c1.62 3.6 8.22 16 27.02 16 17.06 0 32-13.72 32-31.1 0-18.3-14.9-32.9-32-32.9zM480 256c0 17.67-14.33 32-32 32H192c-17.7 0-32-14.3-32-32V128c0-17.67 14.33-32 32-32h256c17.67 0 32 14.33 32 32v128zm-256-96.9c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32c0-16.8-14.3-32-32-32zm192 0c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32c0-16.8-14.3-32-32-32z" />
  </svg>
);

export default SvgMessageBot;
