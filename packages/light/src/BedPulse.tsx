import * as React from "react";
import { SVGProps } from "react";

const SvgBedPulse = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m207.1 96.01 133.1.01 43.71 87.14C388.4 188.6 393.1 192 400 192h.672a16.088 16.088 0 0 0 14.19-10.06l50.77-126.9 16.06 32.13A16 16 0 0 0 496 96.01h128c8.844 0 16-7.156 16-16S632.8 64 624 64H505.9L478.32 8.84C475.5 3.219 470.2-.5 463.3 0a16.088 16.088 0 0 0-14.19 10.06l-50.77 126.9-32.06-64.13A15.917 15.917 0 0 0 352 64H208c-8.8 0-16 7.17-16 16.01s7.2 16 15.1 16zM144 320c44.1 0 80-35.9 80-80s-35.9-80-80-80-80 35.9-80 80 35.88 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm384-32h-48c-8.836 0-16 7.162-16 16 0 8.8 7.2 16 16 16h48c44.2 0 80 35.8 80 80v80H288V192h32c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v176H32V80.97c0-7.979-5.4-15.42-13.27-16.74C8.74 62.55 0 70.31 0 80v415c0 7.979 5.4 15.42 13.27 16.74C23.26 513.4 32 505.7 32 496v-48h576v47.03c0 7.979 5.4 15.42 13.27 16.74C631.3 513.4 640 505.7 640 496V272c0-61.9-50.1-112-112-112zm80 256H32v-32h576v32z" />
  </svg>
);

export default SvgBedPulse;