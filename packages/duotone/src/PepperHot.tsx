import * as React from "react";
import { SVGProps } from "react";

const SvgPepperHot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="pepper-hot_svg__fa-primary"
      d="M465 134.2c21.46-38.38 19.87-87.17-5.65-123.1a23.761 23.761 0 0 0-33.2-5.938c-10.77 7.578-13.44 22.55-5.896 33.41 14.41 20.76 15.13 47.69 4.098 69.77C407.1 100.1 388 95.1 368 95.1c-36.23 0-68.93 13.83-94.24 35.92L352 165.5V256h90.56l33.53 78.23C498.2 308.9 512 276.2 512 239.1c0-41.1-18.3-78.5-47-104.9z"
    />
    <path
      d="M467.7 314.8C406.1 407 248.3 512 56 512c-30.87 0-56-25.1-56-56s25.12-56 56-56c151.5 0 152.9-188.1 236.1-260.2l59.9 25.7V256h90.56l25.14 58.8z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPepperHot;
