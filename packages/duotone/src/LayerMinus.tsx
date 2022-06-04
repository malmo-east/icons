import * as React from "react";
import { SVGProps } from "react";

const SvgLayerMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="layer-minus_svg__fa-primary"
      d="M352 80c0-13.25 10.7-24 24-24h112c13.3 0 24 10.75 24 24s-10.7 24-24 24H376c-13.3 0-24-10.75-24-24z"
    />
    <path
      d="M232.5 133.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 20.9 0 10.2-5.4 18.7-13.9 22.7l-218.6 101c-14.9 6.9-32.1 6.9-47 0l-218.57-101C5.438 273.8 0 265.3 0 255.1c0-8.5 5.437-17 13.93-20.9l218.57-101zm265.6 229c8.5 3.9 13.9 12.4 13.9 20.9 0 10.2-5.4 18.7-13.9 22.7l-218.6 101c-14.9 6.9-32.1 6.9-47 0l-218.57-101C5.438 401.8 0 393.3 0 383.1c0-8.5 5.437-17 13.93-20.9l53.2-24.6 151.97 70.2c23.4 10.9 50.4 10.9 73.8 0l152-70.2 53.2 24.6z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLayerMinus;
