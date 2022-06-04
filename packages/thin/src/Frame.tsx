import * as React from "react";
import { SVGProps } from "react";

const SvgFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M440 112h-56v288h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56H80v56c0 4.4-3.58 8-8 8s-8-3.6-8-8v-56H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h56V112H8c-4.418 0-8-3.6-8-8a8 8 0 0 1 8-8h56V40c0-4.42 3.58-8 8-8s8 3.58 8 8v56h288V40c0-4.42 3.6-8 8-8s8 3.58 8 8v56h56c4.4 0 8 3.58 8 8 0 4.4-3.6 8-8 8zM80 400h288V112H80v288z" />
  </svg>
);

export default SvgFrame;
