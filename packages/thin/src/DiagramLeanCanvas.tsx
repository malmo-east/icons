import * as React from "react";
import { SVGProps } from "react";

const SvgDiagramLeanCanvas = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h512c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm512 240h112V96c0-26.51-21.5-48-48-48h-64v288zM496 48H384v144h112V48zm-128 0h-96v288h96V48zm-112 0H144v144h112V48zm-128 0H64c-26.51 0-48 21.49-48 48v240h112V48zM16 352v64c0 26.5 21.49 48 48 48h248V352H16zm312 112h248c26.5 0 48-21.5 48-48v-64H328v112zm-72-256H144v128h112V208zm128 0v128h112V208H384z" />
  </svg>
);

export default SvgDiagramLeanCanvas;
