import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsUpDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path
      className="arrows-up-down_svg__fa-primary"
      d="M9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25l96-96c12.5-12.5 32.75-12.5 45.25 0l96 96C252.9 111.6 256 119.8 256 128s-3.125 16.38-9.375 22.62c-12.5 12.5-32.75 12.5-45.25 0L160 109.3V256H96V109.3l-41.37 41.3c-12.5 12.5-32.75 12.5-45.255 0z"
    />
    <path
      d="M54.63 361.4 96 402.8V256h64v146.8l41.38-41.38c12.5-12.5 32.75-12.5 45.25 0C252.9 367.6 256 375.8 256 384s-3.125 16.38-9.375 22.62l-96 96c-12.5 12.5-32.75 12.5-45.25 0l-96-96c-12.5-12.5-12.5-32.75 0-45.25s32.755-12.47 45.255.03z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowsUpDown;
