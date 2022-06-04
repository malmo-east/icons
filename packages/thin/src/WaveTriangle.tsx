import * as React from "react";
import { SVGProps } from "react";

const SvgWaveTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M614.4 260.8 496 418.7c-7.625 10.16-19.28 16-32 16s-24.38-5.844-32-16.03L195.2 102.9c-9.1-12.21-29.3-12.18-38.4 0L38.41 260.8c-2.66 3.6-7.69 4.2-11.22 1.6-3.53-2.6-4.25-7.6-1.6-11.2L144 93.31c15.25-20.31 48.75-20.34 64 .031l236.8 315.7c9.125 12.25 29.25 12.22 38.38.032l118.4-157.9c2.656-3.5 7.719-4.188 11.22-1.594 3.5 2.721 4.3 7.721 1.6 11.221z" />
  </svg>
);

export default SvgWaveTriangle;
