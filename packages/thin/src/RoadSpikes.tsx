import * as React from "react";
import { SVGProps } from "react";

const SvgRoadSpikes = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M192 255.1V116.8c0-15.8 20.5-22.01 29.3-9.7l98.7 148V116.8c0-15.8 20.5-22.01 29.3-9.7l98.7 148V116.8c0-15.8 20.5-22.01 29.3-9.7l129.5 195.1c14.2 21.3-1 48.9-26.6 48.9H64V116.8c0-15.8 20.53-22.01 29.31-9.7l98.69 148zm144-138.3v162.3l37.3 56h108.8L336 116.8zm244.2 218.3c11.9 0 20.4-13.3 13.3-24L464 116.8v162.3l37.3 56h78.9zm-354.1 0L80 116.8v218.3h146.1zm128 0L208 116.8v162.3l37.3 56h108.8zM0 439.1c0-3.5 3.582-8 8-8h624c4.4 0 8 4.5 8 8 0 5.3-3.6 8-8 8H8c-4.418 0-8-2.7-8-8z" />
  </svg>
);

export default SvgRoadSpikes;
