import * as React from "react";
import { SVGProps } from "react";

const SvgPlayPause = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M488 64c-13.25 0-24 10.75-24 24v336c0 13.25 10.75 24 24 24s24-10.7 24-24V88c0-13.25-10.7-24-24-24zm-144 0c-13.3 0-24 10.75-24 24v336c0 13.25 10.75 24 24 24s24-10.75 24-24V88c0-13.25-10.7-24-24-24zM32.22 448c7.002 0 14.15-2.305 20.29-7.406l192-159.1c15.25-12.87 15.25-36.37 0-49.24L52.51 71.41C46.36 66.31 39.22 64 32.22 64 15.71 64 0 76.81 0 96.03v319.9C0 435.2 15.71 448 32.22 448zM48 130.1 199.1 256 48 381.9V130.1z" />
  </svg>
);

export default SvgPlayPause;
