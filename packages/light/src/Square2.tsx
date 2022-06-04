import * as React from "react";
import { SVGProps } from "react";

const SvgSquare2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zm-112-64H186.5l87.27-76.5c34.63-30.38 38.64-81.88 9.172-117.2-14.66-17.56-35.28-28.22-58.08-30-22.95-1.969-44.84 5.5-62.02 20.56L145.6 163.9c-7.5 5.9-7.3 15.9-1.5 22.6 5.8 6.7 15.9 7.3 22.6 1.5l17.27-15.09c10.63-9.31 24.23-13.71 38.43-12.71 14.12 1.125 26.91 7.719 36 18.62 18.27 21.91 15.77 53.81-5.688 72.66l-119.3 104.5c-5.016 4.406-6.781 11.44-4.422 17.66C131.4 379.9 137.3 384 144 384h160c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

export default SvgSquare2;
