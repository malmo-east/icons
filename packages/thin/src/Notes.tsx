import * as React from "react";
import { SVGProps } from "react";

const SvgNotes = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M72 16h256c22.06 0 40 17.94 40 40 0 4.42 3.6 8 8 8s8-3.58 8-8c0-30.88-25.1-56-56-56H72C32.31 0 0 32.3 0 72v256c0 30.9 25.13 56 56 56 4.41 0 8-3.6 8-8s-3.59-8-8-8c-22.06 0-40-17.94-40-40V72c0-30.87 25.13-56 56-56zm344 80H160c-35.35 0-64 28.65-64 63.1v256c0 36.2 28.7 64.9 64 64.9h178.7a32.02 32.02 0 0 0 22.63-9.373l109.3-109.3C476.6 355.4 480 347.2 480 338.7V160c0-35.3-28.6-64-64-64zm-64 361.4V376c0-13.23 10.78-24 24-24h81.37L352 457.4zM464 336h-88c-22.06 0-40 17.94-40 40v88H160c-26.47 0-48-21.53-48-48V160c0-26.47 21.53-48 48-48h256c26.47 0 48 21.53 48 48v176z" />
  </svg>
);

export default SvgNotes;