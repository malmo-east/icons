import * as React from "react";
import { SVGProps } from "react";

const SvgTarp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path className="tarp_svg__fa-primary" d="M576 288 416 448V288h160z" />
    <path
      d="M576 288H416v160H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64v160z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTarp;
