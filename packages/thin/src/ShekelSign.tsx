import * as React from "react";
import { SVGProps } from "react";

const SvgShekelSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M192 32c57.4 0 104 46.56 104 104v216c0 4.4-3.6 8-8 8s-8-3.6-8-8V136c0-48.6-39.4-88-88-88H56c-13.25 0-24 10.75-24 24v400c0 4.4-3.58 8-8 8s-8-3.6-8-8V72c0-22.09 17.91-40 40-40h136zm0 448c-22.1 0-40-17.9-40-40V168c0-4.4 3.6-8 8-8s8 3.6 8 8v272c0 13.3 10.7 24 24 24h136c48.6 0 88-39.4 88-88V40c0-4.42 3.6-8 8-8s8 3.58 8 8v336c0 57.4-46.6 104-104 104H192z" />
  </svg>
);

export default SvgShekelSign;
