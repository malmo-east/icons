import * as React from "react";
import { SVGProps } from "react";

const SvgGasPumpSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="gas-pump-slash_svg__fa-primary"
      d="M5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L630.8 469.1c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196z"
    />
    <path
      d="M520.8 382.9c4.5-6.5 7.2-14.4 7.2-22.9V221.1c-27.6-6.2-48-31.3-48-61.1V96l-32-32c-8.8-8.84-8.8-23.16 0-32s23.2-8.84 32 0l77.3 77.3c12 12 18.7 28.2 18.7 45.2V360c0 19.7-6.5 37.9-17.4 52.5l-37.8-29.6zM97.33 50.98C103.3 21.88 129.1 0 160 0h160c35.3 0 64 28.65 64 64v211.7L97.33 50.98zM384 398.5V416H96V171.6l288 226.9zM64 480c0-17.7 14.33-32 32-32h288c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.67 0-32-14.3-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGasPumpSlash;
