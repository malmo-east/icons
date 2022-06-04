import * as React from "react";
import { SVGProps } from "react";

const SvgSquareQuarters = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.64 32 0 60.64 0 96v320c0 35.36 28.64 64 64 64h320c35.36 0 64-28.64 64-64V96c0-35.36-28.6-64-64-64zM64 48h320c10.37 0 19.97 3.295 27.81 8.863L224 244.7 36.19 56.86A47.866 47.866 0 0 1 64 48zM16 416V96c0-10.37 3.297-19.97 8.865-27.81L212.7 256 24.9 443.8c-5.6-8.7-8.9-17.4-8.9-27.8zm368 48H64a47.897 47.897 0 0 1-27.81-8.863L224 267.3l187.8 187.8c-8.7 5.6-17.4 8.9-27.8 8.9zm48-48c0 10.37-3.295 19.97-8.863 27.81L235.3 256 423.1 68.2c5.6 7.83 8.9 17.43 8.9 27.8v320z" />
  </svg>
);

export default SvgSquareQuarters;
