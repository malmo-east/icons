import * as React from "react";
import { SVGProps } from "react";

const SvgAlbum = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="album_svg__fa-primary"
      d="M64 256c0-88.4 71.6-160 160-160s160 71.6 160 160-71.6 160-160 160S64 344.4 64 256zm160 32c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"
    />
    <path
      d="M384 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zM224 416c88.4 0 160-71.6 160-160S312.4 96 224 96 64 167.6 64 256s71.6 160 160 160z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgAlbum;
