import * as React from "react";
import { SVGProps } from "react";

const SvgVideoSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M473.2 200 576 128v248.5l28.16 22.23c2.34-4.43 3.84-9.43 3.84-15.63V128c0-11.98-6.594-22.86-17.23-28.39-10.59-5.484-23.37-4.761-33.15 2.098l-102.8 72.04c-7.25 5.062-9 15.05-3.938 22.28C455.1 203.3 465.9 205 473.2 200zM352 96c17.64 0 32 14.36 32 32v96.97l32 25.26V128c0-35.35-28.65-64-64-64H180.1l40.53 32H352zm281.9 387.4L25.92 3.42c-6.938-5.453-17-4.25-22.48 2.641-5.469 6.938-4.281 17 2.641 22.48l608 480C617 510.9 620.5 512 623.1 512c4.734 0 9.422-2.094 12.58-6.078C642 498.1 640.8 488.9 633.9 483.4zM352 416H96c-17.64 0-32-14.36-32-32V135.4l-29.72-24.3c-1.34 6-2.28 11.3-2.28 16.9v256c0 35.35 28.65 64 64 64h256c26.38 0 49-15.98 58.8-38.77l-27.51-21.72C381.5 403.4 368.4 416 352 416z" />
  </svg>
);

export default SvgVideoSlash;
