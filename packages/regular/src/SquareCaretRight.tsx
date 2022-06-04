import * as React from "react";
import { SVGProps } from "react";

const SvgSquareCaretRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M200.3 142.4c-7-6.5-17.2-8.2-25.9-4.4-8.7 3.8-14.4 12.5-14.4 21.1v192c0 10.4 5.7 19.1 14.4 22.9 8.719 3.812 18.91 2.094 25.91-4.375l104-96C309.2 269.1 312 262.7 312 256s-2.812-13.09-7.719-17.62L200.3 142.4zM384 32H64C28.66 32 0 60.66 0 96v320c0 35.34 28.66 64 64 64h320c35.34 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm16 384c0 8.82-7.18 16-16 16H64c-8.82 0-16-7.18-16-16V96c0-8.82 7.18-16 16-16h320c8.82 0 16 7.18 16 16v320z" />
  </svg>
);

export default SvgSquareCaretRight;