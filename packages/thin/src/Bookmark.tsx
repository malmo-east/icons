import * as React from "react";
import { SVGProps } from "react";

const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 16c26.47 0 48 21.53 48 48v431.1L192 393.3 16 496V64c0-26.47 21.53-48 48-48h256zm0-16H64C28.65 0 0 28.65 0 64v431.1c0 12.35 13.4 20.03 24.06 13.81L192 411.8l167.9 97.96C370.6 516 384 508.3 384 495.1V64c0-35.35-28.7-64-64-64z" />
  </svg>
);

export default SvgBookmark;
