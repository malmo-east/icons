import * as React from "react";
import { SVGProps } from "react";

const SvgSquareY = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-y_svg__fa-primary"
      d="M309.8 136.4 224 236.5l-85.8-100.1c-8.6-10.1-23.7-11.2-33.8-2.6-10.09 8.6-11.24 23.8-2.6 33.8L200 282.2V360c0 13.3 10.8 24 24 24s24-10.75 24-24v-77.8l98.22-114.6c8.625-10.06 7.469-25.22-2.594-33.84-10.126-8.66-25.226-7.46-33.826 2.64z"
    />
    <path
      d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-37.8 135.6L248 282.2V360c0 13.25-10.75 24-24 24s-24-10.75-24-24v-77.8l-98.2-114.6c-8.64-10-7.49-25.2 2.6-33.8 10.08-8.625 25.22-7.438 33.84 2.594L224 236.5l85.78-100.1c8.641-10.05 23.77-11.27 33.84-2.594C353.7 142.4 354.8 157.6 346.2 167.6z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareY;
