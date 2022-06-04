import * as React from "react";
import { SVGProps } from "react";

const SvgLocationCrosshairs = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M352 256c0 53-43 96-96 96-53.9 0-96-43-96-96 0-53.9 42.1-96 96-96 53 0 96 42.1 96 96zm-96-80c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0-176c4.4 0 8 3.582 8 8v56.16C363.7 68.25 443.8 148.3 447.8 248H504c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56.2c-4 99.7-84.1 179.8-183.8 183.8V504c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56.2c-99.7-4-179.75-84.1-183.84-183.8H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h56.16C68.25 148.3 148.3 68.25 248 64.16V8c0-4.418 3.6-8 8-8zM80 256c0 97.2 78.8 176 176 176s176-78.8 176-176S353.2 80 256 80 80 158.8 80 256z" />
  </svg>
);

export default SvgLocationCrosshairs;
