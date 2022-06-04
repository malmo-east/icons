import * as React from "react";
import { SVGProps } from "react";

const SvgCoffeePot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m428 175 52-143H88C39.4 32 0 71.4 0 120v80c0 13.3 10.75 24 23.1 24S48 213.3 48 200v-80c0-22.09 17.91-40 40-40h25.5l34.75 95.5C96.88 215.2 64 276.1 64 344.6c0 51.5 18.62 84.74 49.62 117.7C124.5 473.6 139.5 480 155.1 480h265.8c15.53 0 30.66-6.274 41.32-17.57C493.3 429.5 512 396.2 512 344.6c0-67.7-32-129.5-84-169.6zm-16.5-95-29.1 80H193.6l-29.1-80h247zM114.1 320c7.1-46.2 34.1-85.9 72.1-112h205.9c37.25 26.12 63 66.25 69.75 112H114.1z" />
  </svg>
);

export default SvgCoffeePot;