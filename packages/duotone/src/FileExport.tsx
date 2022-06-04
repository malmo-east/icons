import * as React from "react";
import { SVGProps } from "react";

const SvgFileExport = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="file-export_svg__fa-primary"
      d="M256 0v128h128L256 0zm312.1 295-80-80c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L494.1 288H216c-13.2 0-24 10.8-24 24s10.75 24 24 24h278.1l-39.03 39.03C450.3 379.7 448 385.8 448 392s2.344 12.28 7.031 16.97c9.375 9.375 24.56 9.375 33.94 0l80-80c9.329-9.37 9.329-24.57-.871-33.97z"
    />
    <path
      d="M384 336v128c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.5-48-48V48C0 21.49 21.49 0 48 0h208v128h128v160H216c-13.2 0-24 10.8-24 24s10.75 24 24 24h168z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFileExport;
