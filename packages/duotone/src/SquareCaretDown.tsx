import * as React from "react";
import { SVGProps } from "react";

const SvgSquareCaretDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-caret-down_svg__fa-primary"
      d="m345.6 232.3-104 112c-4.6 4.9-10.9 7.7-17.6 7.7s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41 4.7 8.79 3 18.89-3.5 25.89z"
    />
    <path
      d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.35-28.7-64-64-64zm-38.4 200.3-104 112c-4.6 4.9-10.9 7.7-17.6 7.7s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41 4.7 8.79 3 18.89-3.5 25.89z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareCaretDown;
