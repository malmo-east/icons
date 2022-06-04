import * as React from "react";
import { SVGProps } from "react";

const SvgPenSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M264.3 181.8 426.7 19.32c25-24.997 65.6-24.997 90.6 0l39.4 39.43c3.1 3.12 5.8 6.49 8.2 10.04 16.4 24.84 13.7 58.61-8.2 80.51L409.9 296l220.9 173.1c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L264.3 181.8zm38 29.8 69.6 54.6L447 191l-62.9-62.9-81.8 83.5zM154.8 359.3c-3.9 4.3-6.7 9.5-8.4 15.1l-23 78.2 78.2-23c5.5-1.9 12.2-5.4 17-10.1l84.6-84.6 38 29.9-88.7 88.6c-1.3 1.3-2.6 1.7-4 3.8-9.6 8.5-21 13.9-33.4 18.4L94.77 511c-8.42 2.5-17.53.2-23.74-6.9-6.21-5.3-8.53-14.4-6.05-22.9l35.42-120.3c4.1-14.1 11.8-27 22.2-37.4l73.2-73.2 38 29.9-77.3 77.2c-.6.6-1.2 1.2-1.7 1.9z" />
  </svg>
);

export default SvgPenSlash;
