import * as React from "react";
import { SVGProps } from "react";

const SvgChessKing = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 200c0-25.7-21.5-40-39.9-40H232V72h56.01c4.407 0 8.001-3.578 8.001-8s-3.594-8-8.001-8H232V8c0-4.422-3.591-8-7.998-8-4.402 0-8.902 3.578-8.902 8v48h-56c-3.5 0-8 3.58-8 8s3.594 8 8.001 8h56.01v88H39.89C21.72 160 0 174.3 0 199.1c0 4.105.619 8.254 1.884 12.31l73.04 198.5c1.175 3.243 4.266 5.22 7.534 5.22 4.5 0 7.966-3.672 7.966-7.98 0-.92-.16-1.856-.497-2.772l-72.92-198.1a23.86 23.86 0 0 1-1.072-7.088C15.94 184.8 28.61 176 39.89 176h368.2c11.03 0 23.99 8.668 23.99 24.11 0 2.26-.325 4.498-.986 6.624l-73.04 198.5a8.001 8.001 0 0 0-.497 2.772c0 4.364 3.533 7.994 7.998 7.994 3.251 0 6.314-1.1 7.501-5.234l73.17-198.9A40.86 40.86 0 0 0 448 200zm-88 248H87.96c-30.88 0-56.01 25.12-56.01 56 0 4.422 3.594 8 8.001 8s8.001-3.578 8.001-8c0-22.06 17.94-40 40.01-40h272c22.07 0 40.01 17.94 40.01 40 0 4.422 3.594 8 8.001 8s8.001-3.578 8.001-8C416 473.1 390.9 448 360 448z" />
  </svg>
);

export default SvgChessKing;
