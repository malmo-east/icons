import * as React from "react";
import { SVGProps } from "react";

const SvgFiles = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="files_svg__fa-primary"
      d="M352 0v96h96L352 0zm-24 512H120C53.83 512 0 458.2 0 392V120c0-13.2 10.75-24 24-24s24 10.8 24 24v272c0 39.7 32.3 72 72 72h208c13.25 0 24 10.75 24 24s-10.7 24-24 24z"
    />
    <path
      d="M96 368V48c0-26.51 21.5-48 48-48h208v96h96v272c0 26.51-21.49 48-48 48H144c-26.5 0-48-21.5-48-48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFiles;
