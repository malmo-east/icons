import * as React from "react";
import { SVGProps } from "react";

const SvgHeadSideGoggles = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="head-side-goggles_svg__fa-primary"
      d="M231.1 112H16c-8.836 0-16 7.2-16 16v32c0 8.836 7.164 16 16 16h215.3c13.4 28.8 44 48 77.2 48H416l-.06-160h-111.9c-32.74 0-60.54 19.86-72.94 48zm264-48H448v160h47.1c8.875 0 15.1-7.125 15.1-16V80c.9-8.87-5.3-16-15.1-16z"
    />
    <path
      d="M303.1 64H415C376.1 23.55 322.15 0 265.2 0h-42.1C146.6 0 80.01 45.97 49.64 112h181.5c12.36-28.14 40.16-48 71.96-48zm206.1 211c-5.9-13.3-12.4-31.4-19.1-51H308.5c-33.22 0-63.84-19.23-77.23-48H32.81c-.44 5.3-.81 10.6-.81 16 0 54.5 23.25 106.5 63.1 142.9V512h223.1l.002-64h63.99c35.38 0 63.1-28.62 63.1-63.1V320h31.1c10.88 0 20.9-5.5 26.77-14.62C512.8 296.4 513.6 284.9 509.2 275z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHeadSideGoggles;
