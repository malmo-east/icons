import * as React from "react";
import { SVGProps } from "react";

const SvgCrosshairs = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M296 256c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40zm-40-24c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm8-183.85C372.5 52.25 459.7 139.5 463.8 248H504c4.4 0 8 3.6 8 8s-3.6 8-8 8h-40.2c-4.1 108.5-91.3 195.7-199.8 199.8V504c0 4.4-3.6 8-8 8s-8-3.6-8-8v-40.2C139.5 459.7 52.25 372.5 48.15 264H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h40.15C52.25 139.5 139.5 52.25 248 48.15V8c0-4.418 3.6-8 8-8s8 3.582 8 8v40.15zM120 264H64.16C68.25 363.7 148.3 443.8 248 447.8V392c0-4.4 3.6-8 8-8s8 3.6 8 8v55.8c99.7-4 179.8-84.1 183.8-183.8H392c-4.4 0-8-3.6-8-8s3.6-8 8-8h55.8c-4-99.7-84.1-179.75-183.8-183.84V120c0 4.4-3.6 8-8 8s-8-3.6-8-8V64.16C148.3 68.25 68.25 148.3 64.16 248H120c4.4 0 8 3.6 8 8s-3.6 8-8 8z" />
  </svg>
);

export default SvgCrosshairs;
