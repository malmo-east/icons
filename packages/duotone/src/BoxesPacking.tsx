import * as React from "react";
import { SVGProps } from "react";

const SvgBoxesPacking = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="boxes-packing_svg__fa-primary"
      d="M368 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H16c-8.836 0-16-7.2-16-16v-32c0-8.8 7.164-16 16-16h352zM32 256h320v224c0 17.7-14.3 32-32 32H64c-17.67 0-32-14.3-32-32V256zm112 96h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16z"
    />
    <path
      d="M592 0c26.5 0 48 21.49 48 48v416c0 26.5-21.5 48-48 48H381.3c1.7-5.9 2.7-10.4 2.7-16V253.3c18.6-6.6 32-24.4 32-45.3v-32c0-26.5-21.5-48-48-48H256V48c0-26.51 21.5-48 48-48h288zm-84.7 260.7c-6.2-6.3-16.4-6.3-22.6 0l-64 64c-6.3 6.2-6.3 16.4 0 22.6 6.2 6.3 16.4 6.3 22.6 0l36.7-36.7V432c0 8.8 7.2 16 16 16s16-7.2 16-16V310.6l36.7 36.7c6.2 6.3 16.4 6.3 22.6 0 6.3-6.2 6.3-16.4 0-22.6l-64-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBoxesPacking;
