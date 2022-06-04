import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsToCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <defs>
      <style />
    </defs>
    <path
      className="arrows-to-circle_svg__fa-primary"
      d="M9.372 9.372C21.87-3.124 42.13-3.124 54.63 9.372L159.1 114.7V95.1c0-16.77 15.2-32 32-32 18.6 0 32 15.23 32 32v96c0 5.2 0 9.4-1.5 13.1-1.6 2.9-3.9 7.3-6.9 10.4l-.1.1c-3.1 3-7.5 5.3-10.4 6.9-3.7 1.5-7.9 1.5-13.1 1.5h-96c-16.77 0-32-13.4-32-32 0-16.8 15.23-32 32-32h19.6L9.372 54.63c-12.496-12.5-12.496-32.76 0-45.258zM96 352c-17.67 0-32-14.3-32-32s14.33-32 32-32h96.1c8.8 0 16.7 3.6 22.5 9.3l.1.1c3 3.1 5.3 6.6 6.9 10.4 1.5 3.7 2.4 7.9 2.4 11.3V416c0 17.7-14.3 32-32 32s-32-14.3-32-32v-18.7L54.63 502.6c-12.5 12.5-32.76 12.5-45.257 0s-12.497-32.7 0-45.2L114.7 352H96zM448 64c17.7 0 32 14.33 32 32v18.7L585.4 9.373c12.5-12.497 32.7-12.497 45.2 0s12.5 32.757 0 45.257L525.3 160H544c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-8.8 0-16.8-3.6-22.6-9.3l-.1-.1c-3-3.1-6.2-7.5-6.9-10.4-1.5-3.7-2.4-7.8-2.4-12.1V96c0-17.67 14.3-32 32-32zm77.3 288 105.3 105.4c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0L480 397.3V416c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96.1c0-4.3.9-8.4 2.4-12.1.7-4.7 3.9-7.4 7-10.4 5.7-5.8 13.7-9.4 22.5-9.4H544c17.7 0 32 14.3 32 32s-14.3 32-32 32h-18.7zM384 256c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64z"
    />
  </svg>
);

export default SvgArrowsToCircle;
