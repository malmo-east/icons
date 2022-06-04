import * as React from "react";
import { SVGProps } from "react";

const SvgCarSide = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="car-side_svg__fa-primary"
      d="M640 352v48c0 17.7-14.3 32-32 32 0-61.9-50.1-112-112-112s-112 50.1-112 112H256c0-61.9-50.1-112-112-112-61.86 0-112 50.1-112 112-17.67 0-32-14.3-32-32V288c0-27.1 16.81-50.2 40.56-59.6L82.2 124.3C96.78 87.9 132.1 64 171.3 64h181.9c29.2 0 55.9 13.26 75 36l100 125c63 7.1 111.8 61.8 111.8 127zM171.3 128c-13.1 0-24.8 7.1-29.7 20.1L111.3 224H224v-96h-52.7zM272 224h173.4l-67.2-84c-6-7.6-16.1-12-25-12H272v96z"
    />
    <path
      d="M224 128v96H111.3l30.3-75.9c4.9-13 16.6-20.1 29.7-20.1H224zm48 0h81.2c8.9 0 19 4.4 25 12l67.2 84H272v-96zm-48 304c0 44.2-35.8 80-80 80-44.18 0-80-35.8-80-80s35.82-80 80-80c44.2 0 80 35.8 80 80zm192 0c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCarSide;