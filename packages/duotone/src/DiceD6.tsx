import * as React from "react";
import { SVGProps } from "react";

const SvgDiceD6 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="dice-d6_svg__fa-primary"
      d="M7.994 153.5c1.326 0 2.687.35 3.975 1.119L208 271.5v223.8c0 9.741-7.656 16.71-16.01 16.71-2.688 0-5.449-.721-8.05-2.303l-152.2-92.47C12.13 405.3 0 383.3 0 359.5V161.8c0-5.7 3.817-8.3 7.994-8.3zm432.006 0c4.2 0 8 2.6 8 8.3v197.7c0 23.75-12.12 45.75-31.78 57.69l-152.2 92.5C261.5 511.3 258.7 512 256 512c-8.3 0-16-7-16-16.7V271.5l196-116.9c1.3-.8 2.7-1.1 4-1.1z"
    />
    <path
      d="M426.2 117.2c0 2.825-1.352 5.647-4.051 7.248L224 242.6 25.88 124.4c-2.69-1.6-4.03-5.3-4.03-7.2 0-2.8 1.32-5.603 3.965-7.221l165.1-100.9C201.7 3.023 212.9 0 224 0s22.27 3.023 32.22 9.07l165.1 100.9c3.48 1.63 4.88 4.43 4.88 7.23z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDiceD6;
