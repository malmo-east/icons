import * as React from "react";
import { SVGProps } from "react";

const SvgCheckToSlot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="m341.1 137.2-72.5 92.3-37-31.7c-10-8.6-25.2-7.5-33.8 2.6-8.6 10-7.5 25.2 2.6 33.8l56 48c4.4 2.9 9.8 4.9 14.7 4.9.781 0 1.606-.019 2.388-.113a23.858 23.858 0 0 0 16.53-9.062l88-112c8.188-10.41 6.375-25.5-4.062-33.69C364.4 124.1 349.3 126.8 341.1 137.2zM96 408h384c13.25 0 24-10.75 24-24 0-13.26-10.75-24-24-24V96c0-35.35-28.65-64-64-64H160c-35.3 0-64 28.65-64 64v264c-13.25 0-24 10.74-24 24 0 13.3 10.75 24 24 24zm48-312c0-8.836 7.164-16 16-16h256c8.836 0 16 7.164 16 16v264H144V96zm380.6 192c-13.25 0-24 10.75-24 24s10.75 24 24 24c1.9 0 3.4 1.5 3.4 3.4V424c0 4.406-3.594 8-8 8H56c-4.406 0-8-3.594-8-8v-84.58c0-1.92 1.53-3.42 3.41-3.42 13.25 0 24-10.75 24-24s-10.75-24-24-24C23.06 288 0 311.1 0 339.4V424c0 30.9 25.13 56 56 56h464c30.88 0 56-25.12 56-56v-84.58c0-28.32-23.1-51.42-51.4-51.42z" />
  </svg>
);

export default SvgCheckToSlot;
