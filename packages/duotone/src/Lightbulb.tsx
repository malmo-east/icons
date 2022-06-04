import * as React from "react";
import { SVGProps } from "react";

const SvgLightbulb = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="lightbulb_svg__fa-primary"
      d="m272.1 384-.216 70.34c0 5.328-2.41 13.26-5.348 17.7l-17.08 25.68c-5.25 7.875-17.17 14.28-26.61 14.28H161.2c-9.469 0-21.39-6.406-26.64-14.28l-17.14-25.69c-3.469-5.25-5.284-11.39-5.284-17.69L111.92 384H272.1z"
    />
    <path
      d="M191.4.013C89.44.326 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8 16.53 18.84 42.34 58.23 52.22 91.45.031.25.094.517.125.782h160.2c.031-.265.094-.516.125-.782 9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1 368 78.61 288.9-.284 191.4.013zm.6 95.997c-44.13 0-80 35.89-80 79.1 0 9.69-7.2 16.89-16 16.89s-16-7.2-16-16c0-61.76 50.25-111.1 112-111.1 8.844 0 16 7.159 16 16s-7.2 15.11-16 15.11z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLightbulb;
