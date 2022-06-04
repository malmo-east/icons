import * as React from "react";
import { SVGProps } from "react";

const SvgCommentPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="comment-plus_svg__fa-primary"
      d="M360 240c0 13.26-10.74 23.1-23.1 23.1h-56v56c-1.8 14.2-11.6 24.9-24.9 24.9-13.27 0-23.1-10.74-23.1-23.1v-57.8h-57.8c-12.4 0-23.1-9.8-23.1-23.1 0-13.26 10.74-23.1 23.1-23.1h56v-57.8c.9-12.4 11.6-23.1 24.9-23.1s23.1 10.74 23.1 23.1V216h56c14.2 0 24.9 10.7 24.9 24z"
    />
    <path
      d="M256 32C114.6 32 .028 125.1.028 240c0 49.63 21.35 94.98 56.97 130.7C44.5 421.1 2.73 466 2.23 466.5c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zm80 231.1h-56v56c-.9 14.2-10.7 24.9-24 24.9-13.27 0-23.1-10.74-23.1-23.1v-57.8h-57.8c-12.4 0-23.1-9.8-23.1-23.1 0-13.26 10.74-23.1 23.1-23.1h56v-57.8c.9-12.4 11.6-23.1 24.9-23.1s23.1 10.74 23.1 23.1V216h56c14.2 0 24.9 10.7 24.9 24s-10.7 23.1-24 23.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCommentPlus;
