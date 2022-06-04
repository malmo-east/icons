import * as React from "react";
import { SVGProps } from "react";

const SvgO = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 480C100.5 480 0 379.5 0 256S100.5 32 224 32s224 100.5 224 224-100.5 224-224 224zm0-432C109.3 48 16 141.3 16 256s93.31 208 208 208 208-93.31 208-208S338.7 48 224 48z" />
  </svg>
);

export default SvgO;
