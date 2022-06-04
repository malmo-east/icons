import * as React from "react";
import { SVGProps } from "react";

const SvgTable = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384zM224 256v-96H64v96h160zM64 320v96h160v-96H64zm224 96h160v-96H288v96zm160-160v-96H288v96h160z" />
  </svg>
);

export default SvgTable;