import * as React from "react";
import { SVGProps } from "react";

const SvgSquareChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M64 480h320c35.35 0 64-28.66 64-64V96c0-35.34-28.65-64-64-64H64C28.65 32 0 60.66 0 96v320c0 35.3 28.65 64 64 64zM48 96c0-8.82 7.178-16 16-16h320c8.822 0 16 7.18 16 16v320c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V96zm80.1 208.1 95.9-94.2 95.03 95.03c9.375 9.375 24.56 9.375 33.94 0s9.375-24.56 0-33.94l-112-112C236.3 154.3 230.2 152 224 152s-12.3 2.3-17 7L95 271c-9.375 9.375-9.375 24.56 0 33.94s24.6 9.36 33.1-.84z" />
  </svg>
);

export default SvgSquareChevronUp;