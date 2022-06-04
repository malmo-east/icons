import * as React from "react";
import { SVGProps } from "react";

const SvgRecordVinyl = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="record-vinyl_svg__fa-primary"
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 384c-70.75 0-128-57.25-128-128s57.25-128 128-128 128 57.25 128 128-57.2 128-128 128z"
    />
    <path
      d="M256 127.1c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.3-128-128-128zm0 160.9c-17.7 0-32-14.3-32-32s14.33-32 32-32 32 14.33 32 32-14.3 32-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRecordVinyl;
