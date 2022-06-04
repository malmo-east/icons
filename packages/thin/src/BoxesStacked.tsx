import * as React from "react";
import { SVGProps } from "react";

const SvgBoxesStacked = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M416 56v112c0 30.9-25.1 56-56 56H216c-30.9 0-56-25.1-56-56V56c0-30.93 25.1-56 56-56h144c30.9 0 56 25.07 56 56zm-56-40h-24v72c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24V16h-24c-22.1 0-40 17.91-40 40v112c0 22.1 17.9 40 40 40h144c22.1 0 40-17.9 40-40V56c0-22.09-17.9-40-40-40zM256 88c0 4.42 3.6 8 8 8h48c4.4 0 8-3.58 8-8V16h-64v72zm-56 200c30.9 0 56 25.1 56 56v112c0 30.9-25.1 56-56 56H56c-30.93 0-56-25.1-56-56V344c0-30.9 25.07-56 56-56h144zm-24 88c0 13.3-10.7 24-24 24h-48c-13.25 0-24-10.7-24-24v-72H56c-22.09 0-40 17.9-40 40v112c0 22.1 17.91 40 40 40h144c22.1 0 40-17.9 40-40V344c0-22.1-17.9-40-40-40h-24v72zm-16-72H96v72c0 4.4 3.58 8 8 8h48c4.4 0 8-3.6 8-8v-72zm360-16c30.9 0 56 25.1 56 56v112c0 30.9-25.1 56-56 56H376c-30.9 0-56-25.1-56-56V344c0-30.9 25.1-56 56-56h144zm-24 88c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-72h-24c-22.1 0-40 17.9-40 40v112c0 22.1 17.9 40 40 40h144c22.1 0 40-17.9 40-40V344c0-22.1-17.9-40-40-40h-24v72zm-16-72h-64v72c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-72z" />
  </svg>
);

export default SvgBoxesStacked;
