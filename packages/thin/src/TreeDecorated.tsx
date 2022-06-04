import * as React from "react";
import { SVGProps } from "react";

const SvgTreeDecorated = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M271.1 128c-7.9 0-15.1 7.2-15.1 16s7.2 16 15.1 16c8.834 0 16-7.168 16-16 0-8.8-6.3-16-16-16zM208 256c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm95.1 128c-7.9 0-15.1 7.2-15.1 16 0 8.832 7.166 16 15.1 16 8.834 0 16-7.168 16-16 0-8.8-6.3-16-16-16zm168.5 71.6L381.73 352h35.1c25.62 0 39.5-29.25 23.25-48.5L346.1 192h44.75c21.38 0 32.87-22.5 19.37-37.25L276.12 8.25C270.3 2.75 263.1 0 256 0s-14.2 2.75-19.2 8.25l-134.9 146.5C88.28 169.5 100.8 192 121.27 192h44.75L71.04 303.5C54.79 322.75 68.665 352 94.29 352h35.1L40.42 455.6c-18.1 21.88-3.75 56.38 24.75 56.38h381.6c28.63.02 43.73-34.58 24.83-56.38zm-9.3 30.2c-1.1 2.4-5.5 10.2-15.5 10.2H65.17c-10.01 0-14.35-7.805-15.44-10.2-1.158-2.537-4.379-11.46 2.775-19.7L165.3 336H94.29c-8.543 0-12.07-6.17-12.95-8.061-1.06-2.339-3.01-8.239 1.88-14.039L200.7 176h-79.4c-4.918 0-7.764-2.498-8.787-4.836-1.143-2.611.117-4.424 1.186-5.578l134.9-146.6C250.4 17.1 253.1 16 256 16s5.67 1.098 7.482 3.092l134.1 146.5c1.053 1.152 2.32 2.992 1.146 5.654C398.6 173.5 395.8 176 390.9 176h-79.37l117.3 137.8c4.943 5.854 2.996 11.82 1.93 14.12-.96 1.88-4.46 8.08-12.96 8.08h-71.05l112.8 130.1c7.15 8.2 3.85 17.1 2.75 19.7z" />
  </svg>
);

export default SvgTreeDecorated;
