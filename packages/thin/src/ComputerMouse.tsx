import * as React from "react";
import { SVGProps } from "react";

const SvgComputerMouse = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M224 0h-64C71.63 0 0 71.63 0 160v192c0 88.38 71.63 160 160 160h64c88.38 0 160-71.63 160-160V160C384 71.63 312.4 0 224 0zM16 160C16 80.6 80.6 16 160 16h24v176H16v-32zm352 192c0 79.4-64.6 144-144 144h-64c-79.4 0-144-64.6-144-144V208h352v144zm0-160H200V16h24c79.4 0 144 64.6 144 144v32z" />
  </svg>
);

export default SvgComputerMouse;
