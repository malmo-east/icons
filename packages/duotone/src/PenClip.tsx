import * as React from "react";
import { SVGProps } from "react";

const SvgPenClip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="pen-clip_svg__fa-primary"
      d="M104.1 216.1c-8.5 10.2-23.7 10.2-33.07 0-9.37-8.5-9.37-23.7 0-33.1L173.1 80.97c28.1-28.12 73.7-28.12 101.8 0L417.9 224 229.5 412.5c-48 48-109.2 80.7-175.8 94l-24.99 5c-7.87 1.6-16.01-.9-21.68-7.4-5.674-4.8-8.137-12.9-6.564-20.8l4.999-25C18.78 391.7 51.52 330.5 99.54 282.5L254.1 128l-14-13.1c-8.5-9.4-23.7-9.4-33.1 0L104.1 216.1z"
    />
    <path
      d="M362.7 19.32c25-24.998 65.6-24.998 90.6 0l39.4 39.43c25 24.99 25 65.55 0 90.55L417.9 224 288 94.06l74.7-74.74z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPenClip;
