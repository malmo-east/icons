import * as React from "react";
import { SVGProps } from "react";

const SvgRightLong = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="right-long_svg__fa-primary"
      d="M392.3 134.4c-6.992-6.484-17.18-8.218-25.94-4.41a24.006 24.006 0 0 0-14.42 22v208c0 9.547 5.66 18.19 14.42 21.1 8.754 3.812 18.95 2.079 25.94-4.406l112.1-104c10.24-9.5 10.24-25.69 0-35.19L392.3 134.4z"
    />
    <path
      d="M351.9 288H32c-17.67 0-32-14.3-32-32.9S14.33 224 32 224h319.9v64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRightLong;
