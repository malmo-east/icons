import * as React from "react";
import { SVGProps } from "react";

const SvgTrafficLightStop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M216 392c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56zm-56-40c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm-56-96c0-30.9 25.1-56 56-56s56 25.1 56 56-25.1 56-56 56-56-25.1-56-56zm56 40c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40 17.9 40 40 40zm16-176c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16zm40 0c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-30.93 25.1-56 56-56s56 25.07 56 56zm-56-40c-22.1 0-40 17.91-40 40 0 22.1 17.9 40 40 40s40-17.9 40-40c0-22.09-17.9-40-40-40zm96-80c35.3 0 64 28.65 64 64v288c0 88.4-71.6 160-160 160C71.63 512 0 440.4 0 352V64C0 28.65 28.65 0 64 0h192zm0 16H64c-26.51 0-48 21.49-48 48v288c0 79.5 64.47 144 144 144 79.5 0 144-64.5 144-144V64c0-26.51-21.5-48-48-48z" />
  </svg>
);

export default SvgTrafficLightStop;
