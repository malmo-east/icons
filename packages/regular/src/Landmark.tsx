import * as React from "react";
import { SVGProps } from "react";

const SvgLandmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M494.4 128.1c10.9 6 17.6 17.4 17.6 29.8 0 18.9-15.2 34.1-34.1 34.1H34.06C15.25 192 0 176.8 0 157.9c0-12.4 6.745-23.8 17.61-29.8L244.4 2.986c7.2-3.981 16-3.981 23.2 0L494.4 128.1zM88.18 144H423.8L256 51.41 88.18 144zM112 384h64V224h48v160h64V224h48v160h64V224h48v160h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.25 0-24-10.7-24-24s10.75-24 24-24h8V224h48v160zM0 488c0-13.3 10.75-24 24-24h464c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24z" />
  </svg>
);

export default SvgLandmark;