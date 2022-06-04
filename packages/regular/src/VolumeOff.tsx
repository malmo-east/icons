import * as React from "react";
import { SVGProps } from "react";

const SvgVolumeOff = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M301.2 34.84a32.122 32.122 0 0 0-13.16-2.841 32.014 32.014 0 0 0-21.27 8.1L131.8 160H48c-26.51 0-48 21.49-48 47.1v95.1c0 26.51 21.49 47.1 48 47.1h83.84l134.9 119.9c5.96 8 13.56 10.8 21.26 10.8 4.438 0 8.959-.931 13.16-2.837C312.7 472 320 460.6 320 448V64c0-12.59-7.3-24.9-18.8-29.16zM272 412.4 150.1 304H48v-95.1h102.1L272 99.64V412.4z" />
  </svg>
);

export default SvgVolumeOff;
