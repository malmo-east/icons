import * as React from "react";
import { SVGProps } from "react";

const SvgSeedling = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M436.4 32c-91 0-168.3 67.88-194.6 161.4C204.6 134.6 144 96 75.63 96L0 95.1V120c0 127.9 91.75 232 204.4 232H232v104c0 13.2 10.8 24 23.1 24s24.9-10.8 24.9-24V288h27.62C420.2 288 512 183.9 512 56V32h-75.6zm-232 272c-79.25 0-145.1-69.75-155.1-160h26.25c79.25 0 145.1 69.75 155.1 160H204.4zm103.2-64h-26.25c10-90.25 75.87-160 155.1-160h26.25c-9.9 90.2-75.8 160-155.1 160z" />
  </svg>
);

export default SvgSeedling;
