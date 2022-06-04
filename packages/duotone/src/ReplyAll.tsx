import * as React from "react";
import { SVGProps } from "react";

const SvgReplyAll = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="reply-all_svg__fa-primary"
      d="m136.3 226.2 176 151.1c15.38 13.3 39.69 2.545 39.69-18.16V275.1c108.5 12.58 151.1 58.79 112.6 181.9-5.031 16.09 14.41 28.56 28.06 18.62 43.75-31.81 83.34-92.69 83.34-154.1 0-131.3-94.86-173.2-224-183.5v-82c0-20.67-24.28-31.46-39.69-18.16l-176 152.04c-11.1 9.5-11.1 26.7 0 36.3z"
    />
    <path
      d="m8.31 226.2 176 151.1c15.38 13.3 39.69 2.545 39.69-18.16v-15.83L66.33 208l157.7-136.2V56.02c0-20.67-24.28-31.46-39.69-18.16l-176 151.1C-2.77 199.4-2.77 216.6 8.31 226.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgReplyAll;
