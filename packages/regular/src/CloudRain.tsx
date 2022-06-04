import * as React from "react";
import { SVGProps } from "react";

const SvgCloudRain = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M410.8 104.3C397.3 61.75 357.1 32 312 32c-13.5 0-26.75 2.625-39.25 7.75C250.3 14.5 218.4 0 184 0 120 0 67.6 50.25 64.2 113.4 25.63 130.4 0 168.5 0 212c0 59.5 48.38 108 108 108h296c59.6 0 108-48.5 108-108 0-57.2-44.9-104.2-101.2-107.7zM404 272H108c-33.12 0-60-26.9-60-60 0-28 19.13-52 46.38-58.2l20.88-4.875L112.4 124c-.1-1.2-.4-2.6-.4-4 0-39.75 32.25-72 72-72 25.25 0 48.25 13.12 61.38 35.13l13.38 22.12 21-15C289.4 83.63 300.5 80 312 80c28.62 0 52.38 21.75 55.25 50.38L369.5 152H404c33.13 0 60 26.88 60 60s-26.9 60-60 60zm-36 192c0 26.51 21.49 48 48 48s48-21.49 48-48-48.01-95.1-48.01-95.1S368 437.5 368 464zm-320 0c0 26.5 21.49 48 48 48s48-21.49 48-48-48.01-95.1-48.01-95.1S48 437.5 48 464zm160 0c0 26.51 21.49 48 48 48s48-21.49 48-48-48.01-95.1-48.01-95.1S208 437.5 208 464z" />
  </svg>
);

export default SvgCloudRain;