import * as React from "react";
import { SVGProps } from "react";

const SvgTruckRamp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M632 0c4.4 0 8 3.582 8 8 0 4.42-3.6 8-8 8H424c-30.9 0-56 25.07-56 56v320.5l50.1-14.3C428.3 326.8 473.6 288 528 288c61.9 0 112 50.1 112 112s-50.1 112-112 112-112-50.1-112-112c0-1.5 0-3.1.1-4.6L10.2 511.7c-4.244 1.2-8.674-1.2-9.89-5.5-1.217-5.1 1.239-8.7 5.487-9.9L352 397.1V72c0-39.76 32.2-72 72-72h208zM528 496c53 0 96-43 96-96 0-53.9-43-96-96-96-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96z" />
  </svg>
);

export default SvgTruckRamp;
