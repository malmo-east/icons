import * as React from "react";
import { SVGProps } from "react";

const SvgBedBunk = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="bed-bunk_svg__fa-primary"
      d="M64 128V16c0-8.875-7.12-16-16-16H16C7.125 0 0 7.125 0 16v480c0 8.9 7.125 16 16 16h32c8.88 0 16-7.1 16-16v-48h448v48c0 8.875 7.125 16 16 16h32c8.875 0 16-7.125 16-16V128H64zm448 256H64V192h448v192z"
    />
    <path
      d="M144 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm320 0H240c-8.9 0-16 7.125-16 16v112h352v-16C576 50.13 525.9 0 464 0zM240 256c-8.9 0-16 7.1-16 16v112h288V267.3c-15-7.4-31.4-11.2-48-11.3H240zm-96 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBedBunk;
