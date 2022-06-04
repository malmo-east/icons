import * as React from "react";
import { SVGProps } from "react";

const SvgChurch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M344 48h32c13.3 0 24 10.75 24 24s-10.7 24-24 24h-32v26.9l103.1 66.8c20.5 13.2 32.9 36 32.9 60.4V464h88c13.3 0 24-10.7 24-24v-69.9c0-9-4.1-15.7-11-21l-69-43.8v-57.2l95.1 61.6c20.5 13.2 32.9 36 32.9 60.4V440c0 39.8-32.2 72-72 72H72c-39.76 0-72-32.2-72-72v-69.9c0-24.4 12.38-47.2 32.89-60.4L128 248.1v57.2l-69.04 43.8c-6.83 5.3-10.96 12-10.96 21V440c0 13.3 10.75 24 24 24h88V250.1c0-24.4 12.4-47.2 32.9-60.4L296 122.9V96h-32c-13.3 0-24-10.75-24-24s10.7-24 24-24h32V24c0-13.25 10.7-24 24-24s24 10.75 24 24v24zm-24 116.6-101.9 64.5c-6 5.3-10.1 12-10.1 21V464h64v-96c0-26.5 21.5-48 48-48s48 21.5 48 48v96h64V250.1c0-9-4.1-15.7-11-21l-101-64.5z" />
  </svg>
);

export default SvgChurch;
