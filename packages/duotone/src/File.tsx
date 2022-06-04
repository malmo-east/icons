import * as React from "react";
import { SVGProps } from "react";

const SvgFile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path className="file_svg__fa-primary" d="m224 0 160 160H224V0z" />
    <path
      d="M224 0v160h160v288c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h160z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFile;
