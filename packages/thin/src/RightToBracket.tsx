import * as React from "react";
import { SVGProps } from "react";

const SvgRightToBracket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M472 32h-80c-4.4 0-8 3.58-8 8s3.578 8 8 8h80c13.23 0 24 10.77 24 24v368c0 13.23-10.77 24-24 24h-80c-4.422 0-8 3.578-8 8s3.6 8 8 8h80c22.06 0 40-17.94 40-40V72c0-22.06-17.9-40-40-40zm-97.4 201.4-128-128c-9.1-9.18-22.9-11.93-34.8-6.96-12 4.96-19.8 16.66-19.8 29.56v64H32.02C14.34 192 0 206.3 0 224v64c0 17.67 14.34 32 32.02 32H192v64c0 12.94 7.797 24.62 19.75 29.56 11.97 4.969 25.72 2.219 34.88-6.938l128-128C380.9 272.4 384 264.2 384 256s-3.1-16.4-9.4-22.6zm-11.3 33.9-128 128a15.937 15.937 0 0 1-17.45 3.463A15.95 15.95 0 0 1 208 384v-80H32c-8.82 0-16-7.2-16-16v-64c0-8.822 7.178-16 16-16h176v-80c0-6.502 3.869-12.3 9.885-14.79 5.988-2.486 12.83-1.123 17.43 3.475l128 128C366.3 247.7 368 251.7 368 256s-1.7 8.3-4.7 11.3z" />
  </svg>
);

export default SvgRightToBracket;