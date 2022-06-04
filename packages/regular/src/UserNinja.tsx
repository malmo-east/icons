import * as React from "react";
import { SVGProps } from "react";

const SvgUserNinja = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 192c27.25 0 51.75-11.5 69.25-29.75 15 54 64 93.75 122.8 93.75 70.75 0 127.1-57.25 127.1-128S325.9 0 256.05 0c-50.38 0-93.63 29.38-114.5 71.75C124.1 47.75 96 32 64 32c0 33.37 17.12 62.75 43.13 80-26 17.3-43.13 46.6-43.13 80zm144-96h95.1c18.6 0 32.9 14.3 32.9 32H176c0-17.7 14.3-32 32-32zm272 368c2.742-87.55-59.6-160.1-142.2-176L256 397.1 174.2 288C91.6 303 29.6 376.45 32.3 464c0 26.51 21.18 48 47.69 48h352c26.51 0 48.01-21.5 48.01-48zm-399.66 0-.047-1.504c-1.656-52.91 28.88-99.34 75.41-119.2L246.2 464H80.34zm351.36 0H265.8l90.51-120.7c46.53 19.83 77.06 66.26 75.41 119.2l-.02 1.5z" />
  </svg>
);

export default SvgUserNinja;
