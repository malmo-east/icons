import * as React from "react";
import { SVGProps } from "react";

const Svg2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      d="M320 448c0 17.67-14.33 32-32 32H32a31.995 31.995 0 0 1-29.7-20.09 31.994 31.994 0 0 1 7.594-35.03l193.6-185.1c31.36-30.17 33.95-80 5.812-113.4-14.91-17.69-35.86-28.12-58.97-29.38-22.936-1.17-45.036 6.9-61.806 22.9l-35.01 31.8c-13.08 11.91-33.33 10.89-45.2-2.172C-3.563 136.5-2.594 116.2 10.48 104.3L44.93 73c28.67-27.34 68.39-42.11 108.9-39.88 40.33 2.188 78.39 21.16 104.4 52.03 49.8 59.05 45.2 147.3-10.45 200.8l-136 130H288c17.7.05 32 14.35 32 32.05z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default Svg2;
