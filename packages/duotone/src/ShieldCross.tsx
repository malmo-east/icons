import * as React from "react";
import { SVGProps } from "react";

const SvgShieldCross = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="shield-cross_svg__fa-primary"
      d="M494.8 160a480.538 480.538 0 0 1-8.27 64H288v277.1c-12.4 7-20.2 10.9-32.1 10.9-12.2 0-19.5-4-31.9-10.9V224H25.63c-4.12-20.5-7.06-41.8-8.48-64H224V9.336l13.61-5.633C242.5 1.672 250.8 0 256.1 0c5.281 0 13.56 1.672 18.44 3.703L288 9.297V160h206.8z"
    />
    <path
      d="M16 127.1c0 11.8.48 22.4 1.15 32.9H224V9.336L45.61 83.71C27.7 91.1 16 108.6 16 127.1zm208 374V224H25.63C53.61 363.1 139.4 460.8 224 501.1zm64 0c71.7-34.6 168.5-125.6 198.5-277.1H288v277.1zM466.5 83.71 288 9.297V160h206.8c.6-10.5 1.2-21.9 1.2-32.9 0-18.5-11.7-36-29.5-43.39z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgShieldCross;
