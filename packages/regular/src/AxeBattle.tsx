import * as React from "react";
import { SVGProps } from "react";

const SvgAxeBattle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 176.4c-3.75-68-31.25-128.9-73.5-171.6-3.2-3.3-7.1-4.8-10.9-4.8-7.125 0-13.83 5.104-15.83 13.6C407 33.23 381.1 120 280 120V56c0-13.26-10.75-23.1-24-23.1s-24 9.84-24 23.1v64c-100 0-126.2-86.89-130.1-106.4C99.03 5.105 92.19 0 85.06 0c-3.75 0-7.56 1.479-10.81 4.729C28.75 50.85 0 117.6 0 192s28.75 141.1 74.25 187.3c3.25 3.2 7.06 4.7 10.81 4.7 7.125 0 13.97-5.105 15.97-13.61C105.8 350.9 132 264 232 264v224c0 13.3 10.7 24 24 24s24-10.75 24-24V264c101.1 0 127 86.77 131.8 106.4 2 8.5 8.7 13.6 15.8 13.6 3.75 0 7.625-1.5 10.88-4.75C480.8 336.5 508.3 275.6 512 207.6L496.8 192l15.2-15.6zM232 216c-70.75 0-123.3 33.88-155.1 87.5C58.25 270.6 48.13 232 48.13 192s10.12-78.63 28.75-111.5C108.6 133.9 161.1 168 232 168v48zm229.1 9.3c-3 28.2-12 54.7-25.2 78.2-31.5-53-83.5-87.5-155.9-87.5v-48c71.13 0 123.8-33.38 155.9-87.5 13.25 23.5 22.25 50 26.12 78.25L429.5 192l31.6 33.3z" />
  </svg>
);

export default SvgAxeBattle;
