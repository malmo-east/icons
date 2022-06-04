import * as React from "react";
import { SVGProps } from "react";

const SvgUpLong = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="up-long_svg__fa-primary"
      d="M281.6 119.8 177.6 7.7c-9.5-10.24-25.69-10.24-35.19 0l-104 112.1c-6.49 6.9-8.22 17.1-5.31 25.9a24.004 24.004 0 0 0 22 14.42h208c9.547 0 18.19-5.658 21.1-14.42 5.6-8.8 3.9-19-2.6-25.9z"
    />
    <path
      d="M192 160.1V480c0 17.69-14.33 32-32 32s-32-14.31-32-32V160.1h64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUpLong;
