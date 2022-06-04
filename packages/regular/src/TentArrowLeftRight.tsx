import * as React from "react";
import { SVGProps } from "react";

const SvgTentArrowLeftRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M568.1 78.16c5 4.55 7.9 11.04 7.9 17.84 0 6.8-2.9 13.3-7.9 17.8l-80 72c-9.9 8.9-25.1 8.1-33.9-1.7-8.9-9.9-8.1-25.1 1.7-33.9l33.6-30.2H86.54l33.56 30.2c9.8 8.8 10.6 24 1.7 33.9-9.7 9.8-24 10.6-33.86 1.7l-79.995-72C2.888 109.3 0 102.8 0 96c0-6.8 2.888-13.29 7.945-17.84L87.94 6.161c9.86-8.867 24.16-8.068 33.86 1.784 8.9 9.855 8.1 25.025-1.7 33.895L86.54 72H489.5l-33.6-30.16c-9.8-8.87-10.6-24.04-1.7-33.895 8.8-9.852 24-10.651 33.9-1.784l80 71.999zM468.4 293.1c11.5 8 19.1 21.9 21.2 36.4l16.9 118.6c4.9 33.7-21.3 63.9-55.4 63.9H124.9c-34.08 0-60.26-30.2-55.44-63.9l16.95-118.6c2.06-14.5 9.66-28.4 21.19-36.4L273.3 165c7.8-6.7 20.7-6.7 29.4 0l165.7 128.1zm-334.5 43.1-17.8 118.7c.2 4.8 3.9 9.1 8.8 9.1H264V232.9L136.1 331c-.8 1.3-1.9 3.2-2.2 5.2zM374.4 464h76.7c4 0 8.6-4.3 7.9-9.1l-16.9-118.7c-.3-2-1.4-3.9-3.1-5.2l-127-98.1V360l62.4 104z" />
  </svg>
);

export default SvgTentArrowLeftRight;