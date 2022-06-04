import * as React from "react";
import { SVGProps } from "react";

const SvgTree = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m439.6 391.6-68.98-79.59h15.2c25.59 0 39.5-29.17 23.19-48.48l-60.86-71.51h10.77c21.28 0 32.9-22.5 19.28-37.31L243.3 8.21C238.3 2.796 231.2 0 224 0s-14.3 2.799-19.3 8.236L69.93 154.7c-13.59 14.8-2 37.3 19.28 37.3h10.73l-60.91 71.5C22.72 282.9 36.62 312 62.22 312h15.2L8.44 391.59c-18.1 21.91-3.813 56.4 24.69 56.4l182.9-.01v56c-.03 4.42 3.67 8.02 8.07 8.02s7.915-3.578 7.915-8.002v-56l182.8.013C443.4 448 458.5 413.4 439.6 391.6zm-9.3 30.2c-1.09 2.387-5.42 10.17-15.43 10.17h-182.8v-76.69l61.65-61.66a7.994 7.994 0 0 0 0-11.31 7.99 7.99 0 0 0-11.31 0l-50.34 50.35V167.1c0-4.422-3.606-7.984-8.028-7.984s-7.972 3.562-7.972 7.984v100.7l-50.37-49.5a7.99 7.99 0 0 0-11.31 0 7.994 7.994 0 0 0 0 11.31l61.65 61.66v140.7H33.12c-9.977 0-14.3-7.773-15.39-10.15-1.162-2.545-4.393-11.49 2.791-19.78l91.92-106.1H62.21c-8.535 0-12.06-6.154-12.93-8.039-1.064-2.291-3-8.254 1.926-14.09l83.39-97.88h-45.39c-4.838 0-7.65-2.479-8.67-4.797-1.176-2.674.11-4.533 1.164-5.684l134.8-146.5c1.7-1.86 3.6-2.95 7.5-2.95 3.045 0 5.791 1.088 7.543 2.994l134.9 146.5c1.068 1.16 2.352 3.012 1.184 5.674-1.02 2.322-3.838 4.807-8.689 4.807h-45.39l83.26 97.83c4.971 5.885 3.033 11.85 1.971 14.14-.875 1.885-4.396 8.039-12.94 8.039h-50.24l91.93 106.1C434.7 410.3 431.4 419.3 430.3 421.8z" />
  </svg>
);

export default SvgTree;