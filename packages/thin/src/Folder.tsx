import * as React from "react";
import { SVGProps } from "react";

const SvgFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 96H272l-54.6-54.63c-6-6-14.2-9.37-22.7-9.37H48C21.49 32 0 53.49 0 80v352c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48V144c0-26.5-21.5-48-48-48zm32 336c0 17.67-14.33 32-32 32H48c-17.67 0-32-14.33-32-32V80c0-17.67 14.33-32 32-32h140.1c8.487 0 16.63 3.371 22.63 9.372L265.4 112H464c17.67 0 32 14.33 32 32v288z" />
  </svg>
);

export default SvgFolder;
