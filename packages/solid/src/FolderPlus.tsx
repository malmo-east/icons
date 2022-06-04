import * as React from "react";
import { SVGProps } from "react";

const SvgFolderPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 96H272l-64-64H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zM336 311.1h-56v56c-.9 14.2-10.7 24.9-24 24.9-13.27 0-23.1-10.74-23.1-23.1v-57.8h-57.8c-12.4 0-23.1-9.8-23.1-23.1 0-13.26 10.74-23.1 23.1-23.1h56v-57.8c.9-12.4 11.6-23.1 24.9-23.1s23.1 10.74 23.1 23.1V264h56c14.2 0 24.9 10.7 24.9 24s-10.7 23.1-24 23.1z" />
  </svg>
);

export default SvgFolderPlus;
