import * as React from "react";
import { SVGProps } from "react";

const SvgSquareCaretUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-caret-up_svg__fa-primary"
      d="M349.1 305.6c-2.9 8.7-11.6 14.4-21.1 14.4H120c-9.531 0-18.19-5.656-22-14.41-3.81-8.79-2.09-18.89 4.4-25.89l104-112c9.125-9.75 26.06-9.75 35.19 0l104 112c6.51 7 8.21 17.1 3.51 25.9z"
    />
    <path
      d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.35-28.7-64-64-64zm-34.9 273.6c-2.9 8.7-11.6 14.4-21.1 14.4H120c-9.531 0-18.19-5.656-22-14.41-3.81-8.79-2.09-18.89 4.4-25.89l104-112c9.125-9.75 26.06-9.75 35.19 0l104 112c6.51 7 8.21 17.1 3.51 25.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareCaretUp;
