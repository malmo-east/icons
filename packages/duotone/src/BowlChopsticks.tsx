import * as React from "react";
import { SVGProps } from "react";

const SvgBowlChopsticks = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="bowl-chopsticks_svg__fa-primary"
      d="M511.1 256.2c0 95.69-51.5 179-127.1 223.8-.9 17.7-14.3 32-32.9 32H160c-17.67 0-31.1-14.33-31.1-32C52.4 435.19 1.8 351.9 1.8 256.2c0-17.8 14.37-32.19 31.1-32.19H480c17.6-.91 31.1 14.39 31.1 32.19z"
    />
    <path
      d="M14.71 127.1c1.84 0-26.02 4.596 477.2-80.24C504.1 45.63 512 35.29 512 24.08 512 9.67 500.07.07 488.02.07c-3.727 0 27.4-6.23-476.3 98.77C4.854 100.3 0 106.4 0 113.2c0 8.9 7.361 13.9 14.71 13.9zm472.89 1.7L15.74 143.5C6.969 143.8 0 150.1 0 159.8c0 8.9 7.275 16.2 16.25 16.2h472.1c13.05 0 23.65-10.6 23.65-23.6 0-13.4-11.9-24.1-24.4-23.6z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBowlChopsticks;
