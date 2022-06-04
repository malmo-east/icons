import * as React from "react";
import { SVGProps } from "react";

const SvgDiagramSankey = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M354.1 48c-7.9 0-16 4.8-20.2 12.51L256.1 203.2c-7 12.8-20.5 19.9-35.1 19.9H8c-4.418 0-8-2.7-8-8 0-3.5 3.582-8 8-8h213c8.8 0 16.9-3.9 21.1-11.6l77.8-142.65C326.9 39.1 340.4 32 354.1 32H568c4.4 0 8 3.58 8 8s-3.6 8-8 8H354.1zM174.6 304l94.7 148.9c4.4 6.9 12.1 11.1 20.3 11.1H568c4.4 0 8 3.6 8 8s-3.6 8-8 8H289.6c-13.7 0-26.4-7-33.8-18.5L155.6 304H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h560c4.4 0 8 3.6 8 8s-3.6 8-8 8H174.6z" />
  </svg>
);

export default SvgDiagramSankey;
