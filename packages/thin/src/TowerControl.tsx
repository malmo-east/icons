import * as React from "react";
import { SVGProps } from "react";

const SvgTowerControl = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M280.1 0c5.3 0 8 3.582 8 8 0 4.42-2.7 8-8 8h-48v64h56c18.5 0 32 14.33 32 32v16h89.8c20.9 0 36.2 19.8 31 40.1l-40.1 153.6c8.9 3.5 15.2 12.1 15.2 22.3v16c0 13.3-10.7 24-24 24h-23.9v120c0 4.4-2.7 8-8 8-3.6 0-8-3.6-8-8V384H96.95v120c0 4.4-3.58 8-8 8-4.41 0-8-3.6-8-8V384H55.1c-12.36 0-24-10.7-24-24v-16c0-10.8 8.04-19.9 17.86-23L9.057 168.1C3.768 147.8 19.07 128 40.02 128h88.08v-16c0-17.67 15.2-32 32-32h56V16h-48c-3.6 0-8-3.58-8-8 0-4.418 4.4-8 8-8h112zm104.6 320 40.7-156c2.6-10.1-5-20-15.5-20h-89.8v176h64.6zm-80.6 0V144h-160v176h160zm-176 0V144H40.02c-10.48 0-18.13 9.9-15.48 20l40.68 156h62.88zM392 368c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H55.1c-3.52 0-8 3.6-8 8v16c0 4.4 4.48 8 8 8H392zm-87.9-256c0-8.8-6.3-16-16-16h-128c-8 0-16 7.2-16 16v16h160v-16z" />
  </svg>
);

export default SvgTowerControl;