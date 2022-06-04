import * as React from "react";
import { SVGProps } from "react";

const SvgCalculatorSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M192 288H32c-17.62 0-32 14.38-32 32v160c0 17.62 14.38 32 32 32h160c17.62 0 32-14.38 32-32V320c0-17.6-14.4-32-32-32zm-34.7 134.6c6.223 6.221 6.223 16.4 0 22.62-6.221 6.221-16.4 6.221-22.62 0L112 422.6l-22.62 22.62c-6.221 6.221-16.4 6.221-22.62 0-6.221-6.223-6.221-16.4 0-22.62L89.37 400l-22.62-22.62c-6.221-6.223-6.221-16.4 0-22.62 6.223-6.223 16.4-6.223 22.62 0L112 377.4l22.62-22.62c6.223-6.223 16.4-6.223 22.62 0 6.223 6.221 6.223 16.4 0 22.62L134.6 400l22.7 22.6zM480 288H320c-17.62 0-32 14.38-32 32v160c0 17.62 14.38 32 32 32h160c17.62 0 32-14.38 32-32V320c0-17.6-14.4-32-32-32zm-16 143.1c0 9.6-7.2 16.9-16 16.9h-96.09c-8.71 0-15.91-7.2-15.91-16s7.2-16 15.1-16h96.06c9.64 0 16.84 7.2 16.84 15.1zm0-64c0 9.6-7.2 16.9-16 16.9h-96.06c-8.74 0-15.94-7.2-15.94-16s7.2-16 15.1-16h96.09c9.61 0 16.81 7.2 16.81 15.1zM480 0H320c-17.62 0-32 14.38-32 32v160c0 17.62 14.38 32 32 32h160c17.62 0 32-14.38 32-32V32c0-17.62-14.4-32-32-32zm-16 111.1c0 9.7-7.2 16.9-16 16.9h-32v32.04c0 8.76-7.2 15.96-16 15.96s-16-7.2-16-16v-32h-32.04c-8.76 0-15.96-7.2-15.96-16s7.2-16 15.1-16H384V63.96c0-8.78 7.2-15.96 15.1-15.96S416 55.18 416 63.96V96h32.04c8.76 0 15.96 7.2 15.96 15.1zM192 0H32C14.38 0 0 14.38 0 32v160c0 17.62 14.38 32 32 32h160c17.62 0 32-14.38 32-32V32c0-17.62-14.4-32-32-32zm-16 111.1c0 9.7-7.2 16.9-16 16.9H63.96C55.18 128 48 120.8 48 112s7.18-16 15.96-16h96.09c8.75 0 15.95 7.2 15.95 15.1z" />
  </svg>
);

export default SvgCalculatorSimple;
